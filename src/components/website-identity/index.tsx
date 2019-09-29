import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import * as theme from '../../utils/theme';

export const WebsiteIdentity: React.FC<{}> = () => {
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
  return (
    <StyledLink to="/" aria-label="See Home">
      <Wrapper>
        <StyledGatsbyImage alt="Ortmesh logo" fluid={data.file.childImageSharp.fluid} />
        <WebsiteHeadingWrapper>
          <Heading>{data.site.siteMetadata.title}</Heading>
          <Caption> Write code that matters </Caption>
        </WebsiteHeadingWrapper>
      </Wrapper>
    </StyledLink>
  );
};

const StyledGatsbyImage = styled(GatsbyImage)`
  width: 3rem;  
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-decoration-color: inherit;  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 190px;
  justify-content: space-between;
  font-size: 1rem;
`;

const WebsiteHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h2`
  margin: 0;
  color: ${theme.primaryColor}
`;

const Caption = styled.p`
  font-size: 0.8em;
  margin: 0;
  color: ${theme.secondaryColor}
`;
