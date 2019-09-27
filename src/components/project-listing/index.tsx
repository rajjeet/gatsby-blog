import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Project } from '../project';
import { TProps } from './types';

export const ProjectListing: React.FC<TProps> = ({ projects, heading }) => (
  <div>
    <Header>{heading}</Header>
    {
      projects.map(({ node }) => (
        <Project
          key={node.fields.slug}
          heading={node.frontmatter.title}
          description={node.frontmatter.description}
          thumbnail={node.frontmatter.thumbnail.childImageSharp.fluid}
          link={node.fields.slug}
        />
      ))
    }
  </div>
);

export const query = graphql`
    fragment ProjectListingMarkdownFragment on Mdx {
        frontmatter {
            title
            description
            tags
            thumbnail {
                childImageSharp  {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        fields {
            slug
        }
    }
`;

const Header = styled.h1`
   margin-bottom: 0; 
`;

