import React from 'react';
import styled from 'styled-components';
import { Headshot } from '../headshot';
import { theme } from '../../utils/theme';
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
  padding: 1rem;   
`;

const Bio = styled.div`
  color: #333;
`;

const Header = styled.h2`
  margin-top: 0;
`;

const Wrapper = styled.div`  
  display: flex;
  align-items: center;    
  flex-direction: column;
  padding: 1rem;
  position: sticky;
  top: 1rem;
  @media screen and (${theme.deviceSize.mobileL}){
    flex-direction: row;
  }  
  @media screen and (${theme.deviceSize.laptop}){
    flex-direction: column;
  } 
  background-color: ${(props): string => props.theme.softPrimaryColor};
  border-radius: ${(props): string => props.theme.borderRadius};
  margin: 1rem;
  box-shadow: ${(props): string => props.theme.lightBoxShadow};
`;
