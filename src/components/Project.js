import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import GatsbyImage from 'gatsby-image';
import * as theme from '../utils/colors'

const Project = ({heading, link, description, className, thumbnail, tags}) =>
    <div className={className}>
        <Link to={link}>
            <h3>{heading}</h3>
            <S.GatsbyImage fluid={thumbnail}/>
            <p>{description}</p>
        </Link>
    </div>;

const S = {
    GatsbyImage: styled(GatsbyImage)`
      width: 50%;
      position: relative;
      float: left;
      max-height: 83%;        
      overflow: hidden;  
  `,
};

const StyledProject = styled(Project)`
        display: inline-block;
        padding: 1em;
        cursor: pointer;
        width: 47%;
        margin: 0 1em 0 0;
        text-decoration: none;
        border-radius: 5px;
        height: 200px;
        box-shadow: ${theme.boxShadow};
        
        @media (max-width: ${theme.computerBreakpoint}){
            width: 47%;
         }
        
        @media (max-width: ${theme.tabletBreakpoint}){
            height: 170px;
            width: 45%;
         }
                  
         @media (max-width: 700px){
          width: 95%;
          margin: .5em 0 .5em 0;
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
`;

export default StyledProject;