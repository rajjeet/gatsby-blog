import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import * as theme from '../../utils/theme';
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
        color: ${theme.primaryTextColor};        
        display: inline-block;
        padding: .7em;
        box-sizing: border-box;
        margin:   1em auto;
        width: 95%;
        cursor: pointer;
        text-decoration: none;
        border-radius: ${theme.borderRadius};
        box-shadow: ${theme.boxShadow};
        height: 90%;        
        :hover {
          box-shadow: ${theme.boxShadow};
          transform: translateY(-2px);
          transition: ease .3s;
          pointer: cursor;
        }
        @media (max-width: ${theme.tabletBreakpoint}){
            margin: .5em 2.5%;  
         }        
        h3 {
          margin: .3em auto .3em auto;
        }                
        p {
          display: inline-block;
          max-width: 50%;
          float:left;
          margin-top: .5em;
          padding-left: 1em;
          vertical-align: text-top;
          font-size: ${theme.smallFontSize};
          
          @media (max-width: ${theme.bigMobileBreakpoint}){
            font-size: .7em;
          }          
        }
      
  `,
};

const Wrapper = styled.div`
        display: inline-block;        
        margin-bottom: 1em;
        height: 190px;        

        @media (max-width: ${theme.tabletBreakpoint}){
            width: 100%;
         }
         width: 300px;
`;

