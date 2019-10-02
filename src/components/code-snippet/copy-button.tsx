import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';

export type TProps = {
  copyStatus: boolean;
};

export const CopyButton: React.FC<TProps> = ({ copyStatus }) => (
  <>
    {copyStatus
      ? (
        <>
          <CopyText>Copied</CopyText>
          <FontAwesomeIcon icon={faClipboardCheck} />
        </>
      )
      : (
        <>
          <CopyText>Copy</CopyText>
          <FontAwesomeIcon icon={faClipboard} />
        </>
      )}
  </>
);

const CopyText = styled.span`
  margin-right: .5rem;
`;
