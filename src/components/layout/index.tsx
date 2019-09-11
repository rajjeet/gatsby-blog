import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import '../../styles/global.css';
import styled from 'styled-components';
import * as theme from '../../utils/theme';
import TopNavBar from '../top-nav-bar';

const Layout = ({ className, data, children }) => (
  <div className={className}>
    <TopNavBar data={data} />
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

export default ({ children }) => {
  const data = useStaticQuery(
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
  `,
  );
  return <StyledLayout data={data}>{children}</StyledLayout>;
};
