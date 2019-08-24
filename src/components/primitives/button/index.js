import styled from 'styled-components';
import * as theme from '../../../utils/theme';

const StyledButton = styled.button`
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
