// CopyButton.tsx
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <CopyToClipboard text={text}>
      <button className="bg-blue-500 text-white px-2 py-1 mt-2 rounded hover:bg-blue-600 absolute top-2 right-2 focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M2 5a2 2 0 012-2h4a2 2 0 012 2v1h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h2V5zm10 0v3a3 3 0 003 3h3v9a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h9a3 3 0 013 3z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </CopyToClipboard>
  );
};

export default CopyButton;
