import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TProps } from './types';

export const RoundIconButton: React.FC<TProps> = ({ icon, ...rest }) => (
  <StyledButton {...rest} type="button">
    <FontAwesomeIcon icon={icon} color="white" size="2x" />
  </StyledButton>
);

const StyledButton = styled.button`
    border-radius: 100%;
    border: none;    
    width: 55px;
    height: 55px;
    margin: 1rem;
    background-color: ${(props): string => props.theme.primaryColor};
    cursor: pointer;
    :active, :hover {
      background-color: ${(props): string => props.theme.secondaryColor};
    }
`;
