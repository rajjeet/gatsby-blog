import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Project from './Project';

const ProjectListing = ({ className, projects, heading }) => (
  <div className={className}>
    <h1>{heading}</h1>
    {
      projects.map(({ node }) => (
        <Project
          key={node.fields.slug}
          heading={node.frontmatter.title}
          description={node.frontmatter.description}
          thumbnail={node.frontmatter.thumbnail.childImageSharp.fluid}
          tags={node.frontmatter.tags}
          link={node.fields.slug}
        />
      ))
    }
  </div>
);

export const query = graphql`
    fragment ProjectListingMarkdownFragment on MarkdownRemark {
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

const StyledProjectListing = styled(ProjectListing)`
  h1 {
   margin-bottom: 0; 
  }
`;

export default StyledProjectListing;
