import React from "react";
import styled from 'styled-components';
import Project from "./Project";
import {graphql} from "gatsby";

const ProjectListing = ({className, projects, heading}) => (
    <div className={className}>
        <h1>{heading}</h1>
        {
            projects.map(({node}) =>
                <Project
                    key={node.fields.slug}
                    heading={node.frontmatter.title}
                    description={node.frontmatter.description}
                    thumbnail={node.frontmatter.thumbnail.childImageSharp.fluid}
                    tags={node.frontmatter.tags}
                    link={node.fields.slug}
                />
            )
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
        margin: auto auto 1em auto;
`;

export default StyledProjectListing;