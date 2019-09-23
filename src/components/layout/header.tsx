import { navigate } from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { Button } from '../primitives/button';
import { WebsiteIdentity } from '../website-identity';

export const Header: React.FC<{}> = () => {
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
    <Wrapper>
      <WebsiteIdentity data={data} />
      <Button onClick={(): void => navigate('/blog/1')}>
        Blog
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;  
`;
