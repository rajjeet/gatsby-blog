import styled from 'styled-components';
import { Link, navigate } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import Button from '../primitives/button';
import * as theme from '../../utils/theme';

const TopNavBar = ({ className, data }) => (
  <div className={className}>
    <Link to="/" aria-label="See Home">
      <GatsbyImage alt="Ortmesh logo" fluid={data.file.childImageSharp.fluid} style={{ width: '3em' }} />
    </Link>
    <Link to="/">
      <h2>
        {data.site.siteMetadata.title}
      </h2>
      <p>
        Write code that matters
      </p>
u
    </Link>
    <Button onClick={() => navigate('/about/')}>
      About
    </Button>
  </div>
);

const StyledTopNavBar = styled(TopNavBar)`
  box-shadow: ${theme.lightBoxShadow};
  a {
    text-decoration: none;
    margin: 0;    
  }
   > a:nth-of-type(1){
        display: inline-block;
        padding: 1em;        
        
   }
   > a:nth-of-type(2){
        display: inline-block;
        padding: 1em .5em;
        h2 {
            margin: 0;
            color: ${theme.primaryColor}
        }
        p {
          font-size: 0.8em;
          margin: 0;
          color: ${theme.secondaryColor}
        }
   }
   > button{
         margin: 1.5em;
         float: right;          
   }
`;

export default StyledTopNavBar;
