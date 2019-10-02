import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';
import { TProps } from './types';
import { AuthorCard } from '../author-card';
import { Header } from './header';
import { Footer } from './footer';

export const Layout: React.FC<TProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Header />
      <Main>
        <Aside>
          <AuthorCard />
        </Aside>
        <Content>
          {children}
        </Content>
      </Main>
      <Footer />
    </Wrapper>
  </ThemeProvider>
);

const Wrapper = styled.div`
  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  color: #333;
  font-size: 1.2rem;
  @media screen and ${theme.deviceSize.tablet}{
    font-size: 1rem;
  }
`;

const Aside = styled.aside`
  @media screen and ${theme.deviceSize.laptop}{    
    flex-direction: row;
    max-width: 250px;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column-reverse;
  @media screen and ${theme.deviceSize.laptop}{    
    flex-direction: row;
  }  
  width: 100%;
  margin: 1rem auto 1rem;
  @media screen and ${theme.deviceSize.tablet}{
    width: 90%;
  }  
`;

const Content = styled.div`
  width: 100%;
`;

