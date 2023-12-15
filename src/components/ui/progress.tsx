import React, { useState, useEffect } from 'react';
import ColorUtils from '../../utils/ColorUtils';

interface ProgressProps {
  progress: number;
  title?: string;
  status?: string;
  bgColor?: string;
  textColor?: string;
  variant?: 'dark' | 'light';
  showElapsedTime?: boolean;
}

const ProgressUI: React.FC<ProgressProps> = ({
  progress,
  title,
  status,
  bgColor,
  textColor,
  variant = 'light',
  showElapsedTime = true,
}) => {
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [startTime]);

  const formatElapsedTime = (milliseconds: number): string => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  };

  const typeBgColor = bgColor || ColorUtils.getRandomColor();
  const typeTextColor = textColor || ColorUtils.getTextColor(typeBgColor);
  const cardViewBgColor = variant === 'dark' ? '#333333' : '#ffffff';
  const cardViewTextColor = variant === 'dark' ? '#ffffff' : '#000000';

  return (
    <div className="mt-4">
      {progress !== 0 && (
        <div className={`relative pt-1 bg-${cardViewBgColor} p-4 rounded-lg shadow-md`}>
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span
                className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full p-2`}
                style={{ backgroundColor: typeBgColor, color: typeTextColor }}
              >
                {title || 'Initializing'}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block" style={ {color: typeTextColor }}>
                {progress}%
              </span>
            </div>
          </div>
          <div className="flex w-full overflow-hidden h-2 mb-4 text-xs rounded">
            <div
              style={{ width: `${progress}%`, backgroundColor: typeBgColor }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
            ></div>
          </div>
          {showElapsedTime && (
            <div className="flex items-center text-xs text-gray-500 mb-4 space-x-2">
              <span
                className={`bg-${cardViewBgColor} text-${cardViewTextColor} px-2 py-1 rounded-full`}
                style={{ backgroundColor: typeBgColor, color: typeTextColor }}
              >
                Elapsed Time: {formatElapsedTime(elapsedTime)}
              </span>
            </div>
          )}
          <div className={`text-xs text-${cardViewTextColor} mb-6`}>{status}</div>
        </div>
      )}
    </div>
  );
};

export default ProgressUI;
