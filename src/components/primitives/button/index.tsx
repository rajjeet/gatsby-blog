import React from 'react';
import styled from 'styled-components';

export const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = styled.button`
    background-color: white;
    border: none;
    padding: .5rem 1rem;    
    box-shadow: ${(props): string => props.theme.lightBoxShadow};
    cursor: pointer;
    :hover, :disabled {
      background-color: ${(props): string => props.theme.lightBackgroundColor};
    }             
`;
