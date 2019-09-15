import React from 'react';
import { TProps } from './types';

const CodeSnippet: React.FC<TProps> = ({
  children, language = 'javascript', dataLine, hasLineNumbers,
}) => (
  <pre data-line={dataLine} className={hasLineNumbers || dataLine ? 'line-numbers' : ''}>
    <code className={`language-${language}`}>
      {children}
    </code>
  </pre>
);

export default CodeSnippet;
