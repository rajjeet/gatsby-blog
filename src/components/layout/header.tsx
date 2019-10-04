
import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby-link';
import { Button } from '../primitives/button';
import { WebsiteIdentity } from '../website-identity';
import { theme } from '../../utils/theme';

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
  padding: 1rem .5rem;
  @media screen and ${theme.deviceSize.tablet}{
    padding: 1rem 2rem;  
  }
`;
