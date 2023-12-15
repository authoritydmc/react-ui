import React from 'react';

interface ProgressProps {
  progress: number;
  status: string;
  title: string;
}

const ProgressUI: React.FC<ProgressProps> = ({ progress, status, title }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="mb-4">
        <p className="text-lg">Progress: {progress}%</p>
        <div className="bg-gray-200 h-4 w-full rounded-full overflow-hidden">
          <div
            className="bg-blue-500 h-full transition-all ease-in-out duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <p className="text-gray-700 mb-2">Status: {status}</p>
    
    </div>
  );
};

export default ProgressUI;
