import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../primitives/button';
import { version } from '../../../package.json';

export const Footer: React.FC<{}> = () => (
  <Wrapper>
    <span>&copy; Ortmesh 2019.</span>
    <StyledButton onClick={(): Window => window.open('https://github.com/rajjeet/gatsby-blog')}>
      {`v${version}`}
      <FontAwesomeIcon size="2x" style={{ paddingLeft: '.5rem' }} icon={faGithub} />
    </StyledButton>
  </Wrapper>
);

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;  
`;

const Wrapper = styled.footer`
  background-color: whitesmoke;
  padding: 1rem 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
