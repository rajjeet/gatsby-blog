import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import GatsbyImage from 'gatsby-image';
import * as theme from '../utils/theme'

const Project = ({heading, link, description, className, thumbnail}) =>
    <div className={className}>
        <S.Link to={link}>
            <h3>{heading}</h3>
            <S.GatsbyImage fluid={thumbnail}/>
            <p>{description}</p>
        </S.Link>
    </div>;

const S = {
    GatsbyImage: styled(GatsbyImage)`
      width: 50%;
      position: relative;
      float: left;
      max-height: 83%;        
      overflow: hidden;  
  `,
    Link: styled(Link)`        
        display: inline-block;
        padding: 1em;
        margin: .3em 2.5%;
        width: 95%;
        cursor: pointer;
        text-decoration: none;
        border-radius: 5px;
        box-shadow: ${theme.boxShadow};
        height: 200px;
        @media (max-width: ${theme.tabletBreakpoint}){
            height: 170px;
            margin: .5em 2.5%;  
         }        
        h3 {
          margin-bottom: .3em;
        }                
        p {
          display: inline-block;
          width: 50%;
          padding-left: 1em;
          vertical-align: top;
          
          @media (max-width: ${theme.computerBreakpoint}){
            font-size: .8em;
          }
          @media (max-width: ${theme.bigMobileBreakpoint}){
            font-size: .7em;
          }          
        }
      
  `
};

const StyledProject = styled(Project)`
        width: 50%;
        display: inline-block;
        margin-bottom: 1em;
        height: 200px;        
        
        @media (max-width: ${theme.tabletBreakpoint}){
            width: 100%;
            height: 170px;
         }
`;

export default StyledProject;