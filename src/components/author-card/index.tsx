import React from 'react';
import styled from 'styled-components';
import { Headshot } from '../headshot';
import * as theme from '../../utils/theme';
import { AuthorSocialLinkGroup } from '../author-social-link-group';

export const AuthorCard: React.FC<{}> = () => (
  <Wrapper>
    <Headshot />
    <Content>
      <Header>Rajjeet Phull</Header>
      <Bio>
        Welcome to my personal blog, Ortmesh! Here, I journal my
        journey as a web developer. My aim is to build interesting
        side projects around cloud computing and web development.
      </Bio>
      <AuthorSocialLinkGroup />
    </Content>
  </Wrapper>
);

const Content = styled.div`
  padding: 10px;   
`;

const Bio = styled.div`
  font-style: italic;  
`;

const Header = styled.h2`
  margin-top: 0;
`;

const Wrapper = styled.div`  
  display: flex;
  align-items: center;    
  flex-direction: column;
  padding: 20px;
  position: sticky;
  top: 0;
  @media screen and (min-width: ${theme.bigMobileBreakpoint}){
    flex-direction: row;
  }  
  @media screen and (min-width: ${theme.computerBreakpoint}){
    flex-direction: column;
  } 
`;
