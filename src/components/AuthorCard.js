import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';
import * as theme from '../utils/theme';

const AuthorCard = ({ className }) => (
  <StaticQuery
    query={graphql`
    query {
      file(relativePath: {eq: "images/headshot.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
        }
      }
    }
    `}
    render={(data) => (
      <div className={className}>
        <S.GatsbyImage fluid={data.file.childImageSharp.fluid} />
        <h3>Rajjeet Phull</h3>
        <p>Software Developer. Specializing in .NET(C#), React, SQL Server, and AWS.</p>
      </div>
    )}
  />
);

const S = {
  GatsbyImage: styled(GatsbyImage)`
      max-width: 300px;
      margin: auto;
      border-radius: 5px;
  `,
};

const StyledAuthorCard = styled(AuthorCard)`
  box-shadow: ${theme.lightBoxShadow} ;
  border-radius: 5px;
  padding: 1em;
  h3 {
    margin: 0.2em 0 0 0;
  }
  p {
    font-size: .8em;
  }
`;

export default StyledAuthorCard;