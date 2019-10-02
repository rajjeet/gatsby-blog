import React, { useState } from 'react';
import styled from 'styled-components';
import Clipboard from 'react-clipboard.js';
import { TProps } from './types';
import { CopyButton } from './copy-button';

export const CodeSnippet: React.FC<TProps> = ({
  children, language = 'javascript', dataLine, hasLineNumbers, fileName,
}) => {
  const [copyStatus, setCopyStatus] = useState(false);

  const handleClipboardCopy = (): void => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 5000);
  };

  return (
    <Wrapper>
      <TopBar>
        <FileNameText>{fileName}</FileNameText>
        <StyledClipboard data-clipboard-text={children} onSuccess={handleClipboardCopy}>
          <CopyButton copyStatus={copyStatus} />
        </StyledClipboard>
      </TopBar>
      <pre data-line={dataLine} className={hasLineNumbers || dataLine ? 'line-numbers' : ''}>
        <code className={`language-${language}`}>
          {children}
        </code>
      </pre>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(props): string => props.theme.softPrimaryColor};  
  border-radius: ${(props): string => props.theme.borderRadius};
`;

const FileNameText = styled.span`  
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
`;

const StyledClipboard = styled(Clipboard)`
  background-color: ${(props): string => props.theme.lightBackgroundColor}; 
  border: none;
  padding: .5rem 1rem;
  border-radius: ${(props): string => props.theme.borderRadius};
`;

const TopBar = styled.div`  
  padding: .5rem .5rem 0 1rem;
  border-radius: ${(props): string => props.theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: space-between;  
`;
