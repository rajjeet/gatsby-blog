import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as theme from '../../../utils/theme';
import { TProps } from './types';

export const RoundIconButton: React.FC<TProps> = ({ icon, ...rest }) => (
  <StyledButton {...rest} type="button">
    <FontAwesomeIcon icon={icon} color="white" size="2x" />
  </StyledButton>
);

const StyledButton = styled.button`
    border-radius: 100%;
    outline: none;
    border: none;    
    padding: 1rem;
    min-width: 55px;
    margin: 1rem;
    background-color: ${theme.primaryColor};
    box-shadow: ${theme.hoverBoxShadow};
    cursor: pointer;
    :active {
      background-color: ${theme.secondaryColor};
    }
`;
