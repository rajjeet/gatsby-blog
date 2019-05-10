import React from "react";
import styled from 'styled-components';
import Project from "./Project";
import {graphql} from "gatsby";

const ProjectListing = ({projects, heading}) => (
    <>
        <h1>{heading}</h1>
        {
            projects.map(({node}) =>
                <Project
                    key={node.fields.slug}
                    heading={node.frontmatter.title}
                    description={node.frontmatter.description}
                    tags={node.frontmatter.tags}
                    link={node.fields.slug}
                />
            )
        }
    </>
);

export const query = graphql`
        fragment ProjectListingMarkdownFragment on MarkdownRemark {
            frontmatter {
              title
              description
            }
            fields {
              slug
            }          
        }
        `;

const StyledProjectListing = styled(ProjectListing)`
        width: 50%;
        margin: 1em 0;
`;

export default StyledProjectListing;