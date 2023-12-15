import React from 'react';
import './App.css';
import ProgressUI from './components/progress';

function App() {
  return (
    <>
      <p className="text-3xl font-bold underline">This is my page</p>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="bg-gray-500 text-white p-4">
        This is an example component with Tailwind CSS styling.
      </div>
      {/* Use the ProgressUI component with appropriate props */}
      <ProgressUI progress={75} status="In Progress" title="Task 1" />
    </>
  );
}

export default App;
