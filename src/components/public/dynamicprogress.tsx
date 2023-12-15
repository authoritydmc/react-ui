import React, { useState, useEffect } from 'react';
import ProgressUI from '../ui/progress';

const DynamicStartProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  const totalDuration = 2 * 60 * 1000; // 2 minutes in milliseconds
  const steps = 100;
  const stepDuration = totalDuration / steps;

  const handleStart = () => {
    setStartTime(Date.now());
  };

  useEffect(() => {
    let intervalId: number;

    if (startTime !== null) {
      intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
        setProgress((prevProgress) => (prevProgress + 1) % 100);
      }, stepDuration);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [startTime]);

  const getRandomTitle = () => {
    const titles = [
      'Dynamic Start Progress',
      'Live Tracking Task',
      'Real-time Processing',
      'Interactive Workflow',
    ];
    const randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
  };



  return (
    <div className="mb-8 border p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">Use Case 7: Dynamic Start with Elapsed Time (Dark Mode)</h2>
      <p className="mb-4">Render a progress bar with elapsed time in dark mode after the user clicks on the start button.</p>
      <button
        onClick={handleStart}
        className="bg-green-500 text-white px-2 py-1 mt-2 rounded hover:bg-green-600 focus:outline-none"
      >
        Start Progress
      </button>
      <div className="mt-4">
        <ProgressUI
          progress={progress}
          title={getRandomTitle()}
          bgColor="#1a202c"
          textColor="#cbd5e0"
          variant="dark"
          showElapsedTime
          status={`Elapsed Time: ${formatElapsedTime(elapsedTime)}`}
        />
      </div>
    </div>
  );
};

const formatElapsedTime = (milliseconds: number): string => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
};

export default DynamicStartProgress;
