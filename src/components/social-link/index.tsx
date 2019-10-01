import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { TProps } from './types';

export const SocialLink: React.FC<TProps> = ({
  link, icon, name, color, labelPrefix,
}) => (
  <StyledSpan>
    <StyledLink href={link} target="_blank" rel="noopener noreferrer" aria-label={`${labelPrefix} ${name}`} color={color}>
      <FontAwesomeIcon size="2x" icon={icon} />
    </StyledLink>
  </StyledSpan>
);

const StyledSpan = styled.span`
  svg {
    max-width: 32px;
  }
`;

const StyledLink = styled.a`
  vertical-align: center;
  color: ${(props): string => props.color};
  :hover {
    color: ${(props): string => props.theme.secondaryColor};
  }
  cursor: pointer;
`;
