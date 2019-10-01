import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { theme } from '../../utils/theme';
import { TProps } from './types';

export const Project: React.FC<TProps> = ({
  heading, link, description, thumbnail,
}) => (
  <Wrapper>
    <S.Link aria-label={`See ${heading}`} to={link}>
      <h3>{heading}</h3>
      <S.GatsbyImage alt={heading} fluid={thumbnail} />
      <p>{description}</p>
    </S.Link>
  </Wrapper>
);

const S = {
  GatsbyImage: styled(GatsbyImage)`
    width: 40%;
    position: relative;
    float: left;
    max-height: 80%;        
    overflow: hidden;  
  `,
  Link: styled(Link)`
    color: ${(props): string => props.theme.primaryTextColor};        
    display: inline-block;
    padding: .7rem;
    box-sizing: border-box;
    margin:   1rem auto;
    width: 95%;
    cursor: pointer;
    text-decoration: none;
    border-radius: ${(props): string => props.theme.borderRadius};
    box-shadow: ${(props): string => props.theme.boxShadow};
    height: 90%;        
    :hover {
      box-shadow: ${(props): string => props.theme.boxShadow};
      transform: translateY(-2px);
      transition: ease .3s;
      pointer: cursor;
    }
    @media screen and ${theme.deviceSize.tablet}{
        margin: .5rem 2.5%;  
     }        
    h3 {
      margin: .3rem auto .3rem auto;
    }                
    p {
      display: inline-block;
      max-width: 50%;
      float:left;
      margin-top: .5rem;
      padding-left: 1rem;
      vertical-align: text-top;
      
      @media screen and ${theme.deviceSize.mobileL}{
        font-size: .7rem;
      }          
    }
  `,
};

const Wrapper = styled.div`
  display: inline-block;        
  margin-bottom: 1rem;
  height: 190px;        

  @media screen and ${theme.deviceSize.tablet}{
      width: 100%;
   }
   width: 300px;
`;

