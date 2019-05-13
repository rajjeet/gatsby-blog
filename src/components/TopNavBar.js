import styled from "styled-components";
import * as theme from "../utils/colors";
import {Link, navigate} from "gatsby";
import GatsbyImage from "gatsby-image";
import Button from "./Button";
import React from "react";

const TopNavBar = ({className, data}) => (
    <div className={className}>
        <Link link to={'/'}>
            <GatsbyImage fluid={data.file.childImageSharp.fluid} style={{width: '3em'}}/>
        </Link>
        <Link link to={'/'}>
            <h2
            >{data.site.siteMetadata.title}</h2>
            <p>
                Write code that matters
            </p>
        </Link>
        <Button onClick={() => navigate('/about/')}>
            About
        </Button>
    </div>
);

const StyledTopNavBar = styled(TopNavBar)`
   > a:nth-of-type(1){
        display: inline-block;
        padding: .5em;
        margin: .5em 0;
        
   }
   > a:nth-of-type(2){
        display: inline-block;
        padding: .5em;
        margin: .5em 0;
        h2 {
            margin-bottom: 0;
            color: ${theme.primaryColor}
        }
        p {
          font-size: 0.8em
        }
   }
   > button{
         margin: 1.5em auto;
         float: right;
   }
`;

export default StyledTopNavBar;