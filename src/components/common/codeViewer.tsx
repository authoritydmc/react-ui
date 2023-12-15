import React, { useState, useRef } from 'react';
import { FaClipboard } from 'react-icons/fa';
import ClipboardJS from 'clipboard'; // Import ClipboardJS

interface CodeViewerProps {
  code: string;
}

const CodeViewer: React.FC<CodeViewerProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  const handleCopyClick = () => {
    const clipboard = new ClipboardJS('.copy-button', {
      text: () => code,
    });

    clipboard.on('success', () => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    });

    clipboard.on('error', () => {
      console.error('Failed to copy to clipboard');
    });

    clipboard.destroy(); // Destroy the instance after copying
  };

  return (
    <div style={{ background: '#333', padding: '16px', borderRadius: '8px', position: 'relative' }}>
      <div
        className="copy-button"
        style={{ position: 'absolute', top: '8px', right: '8px', cursor: 'pointer' }}
        onClick={handleCopyClick}
      >
        <FaClipboard size={20} />
      </div>
      <pre ref={codeRef} style={{ color: '#fff', margin: 0, fontFamily: 'monospace', overflowX: 'auto' }}>
        <code>{code}</code>
      </pre>
      {isCopied && <div style={{ position: 'absolute', top: '8px', right: '40px', color: '#fff' }}>Copied!</div>}
    </div>
  );
};

export default CodeViewer;
