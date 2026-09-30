import React, { useState } from 'react';
import { FaClipboard, FaCheck } from 'react-icons/fa';

export interface CodeViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  language?: string;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({
  code,
  language,
  className = '',
  style,
  ...props
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div
      className={`relative rounded-xl bg-gray-900 text-gray-100 p-4 font-mono text-sm border border-gray-800 shadow-md ${className}`}
      style={style}
      {...props}
    >
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-800">
        <span className="text-xs text-gray-400 font-sans uppercase tracking-wider">
          {language || 'code'}
        </span>
        <button
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 px-2.5 py-1 rounded-md transition-colors"
        >
          {isCopied ? (
            <>
              <FaCheck className="text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <FaClipboard />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto m-0 p-0 text-gray-200">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeViewer;
