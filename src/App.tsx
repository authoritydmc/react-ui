// App.tsx
import React, { useState, useEffect } from 'react';
import ProgressUI from './components/ui/progress';
import ColorUtils from './utils/ColorUtils';
import DynamicStartProgress from './components/public/dynamicprogress';
import CodeViewer from './components/common/codeViewer';

const App: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const totalDuration = 2 * 60 * 1000; // 2 minutes in milliseconds
  const steps = 100;
  const stepDuration = totalDuration / steps;

  useEffect(() => {
    let intervalId: any;

    const incrementProgress = () => {
      setProgress((prevProgress) => (prevProgress + 1) % 100);
    };

    const initialDelay = 1000; // 1 second initial delay
    setTimeout(() => {
      incrementProgress();
      intervalId = setInterval(incrementProgress, stepDuration);
    }, initialDelay);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getRandomTitle = () => {
    const titles = [
      'Mission Impossible',
      'The Enchanted Quest',
      'Epic Journey to the Stars',
      'Secrets of the Lost City',
      'The Quantum Odyssey',
      'Chronicles of the Nebula',
      'The Celestial Safari',
      'Legendary Quest for Wisdom',
    ];
    const randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
  };

  const getRandomMessage = () => {
    const messages = [
      'Embark on a magical adventure!',
      'Unlock the mysteries of the universe!',
      'Discover the hidden realms!',
      'Challenge the limits of space and time!',
      'Journey to the unknown and beyond!',
      'Face the cosmic challenges!',
      'Navigate through the galaxies!',
      'A tale of wonder and exploration!',
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  const getRandomColor = () => {
    return ColorUtils.getRandomColor();
  };

  const useCaseTemplate = (useCaseNumber: number, description: string, codeSnippet: string, component: React.ReactNode) => (
    <div className="mb-8 border p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">{`Use Case ${useCaseNumber}: ${description}`}</h2>
      <p className="mb-4">{description}</p>
      <pre className="bg-gray-100 p-4 rounded mb-4 relative">
        <code>
          <CodeViewer code={codeSnippet} />
        </code>
      </pre>
      {component}
    </div>
  );

  return (
    <div className="App p-4 bg-dark text-dark">
      <a href="https://github.com/authoritydmc/react-ui" target='_blank'>
      <h1 className="text-3xl mx-auto flex justify-center m-10">Progress Bar UI </h1>
      </a>
      {useCaseTemplate(
        1,
        'Basic Progress',
        `// Use Case 1: Basic Progress
<ProgressUI
  progress={progress}
  title="Static Title"
  bgColor="#63b3ed"
  textColor="#1e3a8a"
/>`,
        <ProgressUI
          progress={progress}
          title="Static Title"
          bgColor="#63b3ed"
          textColor="#1e3a8a"
        />
      )}

      {useCaseTemplate(
        2,
        'Progress with Elapsed Time',
        `// Use Case 2: Progress with Elapsed Time
<ProgressUI
  progress={progress}
  title="${getRandomTitle()}"
  bgColor="${getRandomColor()}"
  textColor="${getRandomColor()}"
  showElapsedTime
  status="${getRandomMessage()}"
/>`,
        <ProgressUI
          progress={progress}
          title={getRandomTitle()}
          bgColor={getRandomColor()}
          textColor={getRandomColor()}
          showElapsedTime
          status={getRandomMessage()}
        />
      )}

      {useCaseTemplate(
        3,
        'Custom Styled Progress (Dark Mode)',
        `// Use Case 3: Custom Styled Progress (Dark Mode)
<ProgressUI
  progress={progress}
  title="${getRandomTitle()}"
  bgColor="#1a202c"
  textColor="#cbd5e0"
  variant="dark"
  showElapsedTime
  status="${getRandomMessage()}"
/>`,
        <ProgressUI
          progress={progress}
          title={getRandomTitle()}
          bgColor="#1a202c"
          textColor="#cbd5e0"
          variant="dark"
          showElapsedTime
          status={getRandomMessage()}
        />
      )}

      {useCaseTemplate(
        4,
        'Progress without Elapsed Time',
        `// Use Case 4: Progress without Elapsed Time
<ProgressUI
  progress={progress}
  title="${getRandomTitle()}"
  bgColor="${getRandomColor()}"
  textColor="${getRandomColor()}"
  showElapsedTime={false}
  status="${getRandomMessage()}"
/>`,
        <ProgressUI
          progress={progress}
          title={getRandomTitle()}
          bgColor={getRandomColor()}
          textColor={getRandomColor()}
          showElapsedTime={false}
          status={getRandomMessage()}
        />
      )}

      {useCaseTemplate(
        5,
        'Custom Styled Progress without Elapsed Time (Dark Mode)',
        `// Use Case 5: Custom Styled Progress without Elapsed Time (Dark Mode)
<ProgressUI
  progress={progress}
  title="${getRandomTitle()}"
  bgColor="#1a202c"
  textColor="#cbd5e0"
  variant="dark"
  showElapsedTime={false}
  status="${getRandomMessage()}"
/>`,
        <ProgressUI
          progress={progress}
          title={getRandomTitle()}
          bgColor="#1a202c"
          textColor="#cbd5e0"
          variant="dark"
          showElapsedTime={false}
          status={getRandomMessage()}
        />
      )}

      {useCaseTemplate(
        6,
        'Basic Progress without Status',
        `// Use Case 6: Basic Progress without Status
<ProgressUI
  progress={progress}
  title="${getRandomTitle()}"
  bgColor="${getRandomColor()}"
  textColor="${getRandomColor()}"
/>`,
        <ProgressUI
          progress={progress}
          title={getRandomTitle()}
          bgColor={getRandomColor()}
          textColor={getRandomColor()}
        />
      )}


      <DynamicStartProgress/>
    </div>
  );
};

export default App;
