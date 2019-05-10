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
            {/*<S.TagGroup>
                {
                    tags && tags.map(tag => <label key={tag}>{tag}</label>)
                }
            </S.TagGroup>*/}
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
    TagGroup: styled.div`
      margin-left: 1em;
      label {
          padding: 2px;
          margin-top: 1em;
          margin-right: 1em;
          margin-bottom: .5em;
          box-shadow: 0 0 5px gray;
          border-radius: 5px;
        }
  `
};

const StyledProject = styled(Project)`
        display: inline-block;
        padding: 1em;
        cursor: pointer;
        width: 45%;
        margin: 0 1em 0 0;
        text-decoration: none;
        border-radius: 5px;
        height: 200px;
        box-shadow: 0px 0px 5px gray;
        
        @media (max-width: ${theme.tabletBreakpoint}){
            height: 170px;
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