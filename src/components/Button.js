import React from "react";
import styled from 'styled-components'
import * as theme from '../utils/colors';

const Button = props =>
    <button {...props} >
        {props.children}
    </button>;

const StyledButton = styled(Button)`
    background-color: white;
    outline: none;
    border: none;
    padding: .5em 1em;
    margin: .2em auto;
    box-shadow: ${theme.lightBoxShadow};
    cursor: pointer;
    :hover {
      background-color: whitesmoke;
    }
    :disabled {
      background-color: whitesmoke;
    }
`;

export default StyledButton;