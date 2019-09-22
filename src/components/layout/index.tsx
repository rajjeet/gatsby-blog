import React from 'react';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import styled from 'styled-components';
import * as theme from '../../utils/theme';
import { TProps } from './types';
import { AuthorCard } from '../author-card';
import { Header } from './header';
import { Footer } from './footer';

export const Layout: React.FC<TProps> = ({ children }) => (
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
);

const Wrapper = styled.div`
  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
`;

const Aside = styled.aside`
  @media screen and (min-width: ${theme.computerBreakpoint}){    
    flex-direction: row;
    max-width: 220px;
  }      
  background-color: whitesmoke;    
`;

const Main = styled.main`
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: ${theme.computerBreakpoint}){    
    flex-direction: row;
  }
`;

const Content = styled.div`
  width: 100%;
  margin: auto;
  @media screen and (min-width: ${theme.tabletBreakpoint}){
    width: 80%;
  }  
`;

