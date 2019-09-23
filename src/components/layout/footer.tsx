import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../primitives/button';

export const Footer: React.FC<{}> = () => (
  <Wrapper>
    <span>&copy; Ortmesh 2019.</span>
    <StyledButton onClick={(): Window => window.open('https://github.com/rajjeet/gatsby-blog')}>
      {'See this website\'s code'}
      <FontAwesomeIcon size="2x" style={{ paddingLeft: '.5rem' }} icon={faGithub} />
    </StyledButton>
  </Wrapper>
);

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;  
`;

const Wrapper = styled.footer`
  background-color: gray;
  padding: 1em 2em;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
