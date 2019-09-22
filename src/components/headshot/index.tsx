import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';

export const Headshot: React.FC<{}> = () => {
  const data = useStaticQuery(
    graphql`
        query {
            file(relativePath: {eq: "images/headshot.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `,
  );

  return <GatsbyImageWrapper fluid={data.file.childImageSharp.fluid} alt="Headshot of site author" />;
};

const GatsbyImageWrapper = styled(GatsbyImage)`
  margin: 10px;
  width: 100%;
  max-width: 180px;
  min-width: 150px;
  border-radius: 50%;
`;
