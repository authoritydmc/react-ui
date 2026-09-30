import React, { useState, useEffect } from 'react';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  progress: number;
  title?: string;
  status?: string;
  bgColor?: string;
  textColor?: string;
  variant?: 'dark' | 'light';
  showElapsedTime?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({
  progress,
  title,
  status,
  bgColor,
  textColor,
  variant = 'light',
  showElapsedTime = false,
  className = '',
  style,
  ...props
}) => {
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (!showElapsedTime) return;
    const intervalId = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [showElapsedTime, startTime]);

  const formatElapsedTime = (milliseconds: number): string => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  };

  const clamped = Math.min(100, Math.max(0, progress));
  const typeBgColor = bgColor || '#2563eb';
  const typeTextColor = textColor || '#ffffff';
  const isDark = variant === 'dark';

  return (
    <div
      className={`rounded-xl p-4 shadow-sm border ${
        isDark
          ? 'bg-gray-900 border-gray-800 text-white'
          : 'bg-white border-gray-200 text-gray-900'
      } ${className}`}
      style={style}
      {...props}
    >
      <div className="flex mb-2 items-center justify-between gap-2">
        {title && (
          <span
            className="text-xs font-semibold inline-block py-1 px-2.5 rounded-full"
            style={{ backgroundColor: typeBgColor, color: typeTextColor }}
          >
            {title}
          </span>
        )}
        <span className="text-xs font-bold ml-auto">{clamped}%</span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden mb-2">
        <div
          style={{ width: `${clamped}%`, backgroundColor: typeBgColor }}
          className="h-full transition-all duration-300 rounded-full"
        />
      </div>

      {showElapsedTime && (
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          Elapsed Time: {formatElapsedTime(elapsedTime)}
        </div>
      )}

      {status && (
        <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">{status}</div>
      )}
    </div>
  );
};

export const ProgressUI = Progress;
export default Progress;
