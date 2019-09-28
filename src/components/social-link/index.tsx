import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import * as theme from '../../utils/theme';
import { TProps } from './types';

export const SocialLink: React.FC<TProps> = ({
  link, icon, name,
}) => (
  <StyledSpan>
    <StyledLink href={link} target="_blank" rel="noopener noreferrer" aria-label={`See ${name} (opens new tab)`}>
      <FontAwesomeIcon size="2x" icon={icon} />
    </StyledLink>
  </StyledSpan>
);

const StyledSpan = styled.span`
  margin-right: 1em;  
  svg {
    max-width: 32px;
  }
`;

const StyledLink = styled.a`
  vertical-align: center;
  color: ${theme.primaryColor};
  :hover {
    color: ${theme.secondaryColor};
  }
`;
