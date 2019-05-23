import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import '../styles/global.css';
import styled from 'styled-components';
import * as theme from '../utils/theme';
import TopNavBar from "./TopNavBar";

const Layout = ({className, data, children}) => (
    <div className={className}>
        <TopNavBar data={data}/>
        {children}
    </div>
);

const StyledLayout = styled(Layout)`
  width: 80%;
  margin: .5em auto 3em auto;
  @media (max-width: ${theme.tabletBreakpoint}){
    width: 95%;
    margin: 0 auto 1em auto;
    }
`;

export default ({children}) => (
    <StaticQuery query={
        graphql`
            {
              site {
                siteMetadata {
                  title
                }
              }
              file(relativePath: {eq: "images/logo.png"}) {
                childImageSharp {
                  fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
        `
    }
                 render={data => <StyledLayout data={data} children={children}/>}
    />
)

