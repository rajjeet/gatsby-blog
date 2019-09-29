import { navigate } from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../primitives/button';
import { WebsiteIdentity } from '../website-identity';
import * as theme from '../../utils/theme';

export const Header: React.FC<{}> = () => (
  <Wrapper>
    <WebsiteIdentity />
    <Button onClick={(): void => navigate('/blog/1')}>
        Blog
    </Button>
  </Wrapper>
);

const Wrapper = styled.header`
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em .5rem;
  @media screen and (min-width: ${theme.tabletBreakpoint}){
    padding: 1em 2em;  
  }
`;
