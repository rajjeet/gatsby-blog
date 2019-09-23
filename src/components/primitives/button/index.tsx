import React from 'react';
import styled from 'styled-components';
import * as theme from '../../../utils/theme';

export const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = styled.button`
    background-color: white;
    outline: none;
    border: none;
    padding: .5em 1em;    
    box-shadow: ${theme.lightBoxShadow};
    cursor: pointer;
    :hover {
      background-color: whitesmoke;
    }
    :disabled {
      background-color: whitesmoke;
    }
`;
