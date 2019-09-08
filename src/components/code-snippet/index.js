import React from 'react';

const CodeSnippet = ({
  children, language = 'javascript', dataLine, hasLineNumbers,
}) => (
  <pre data-line={dataLine} className={hasLineNumbers || dataLine ? 'line-numbers' : ''}>
    <code className={`language-${language}`}>
      {children}
    </code>
  </pre>
);

export default CodeSnippet;
