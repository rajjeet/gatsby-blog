import React from "react";
import styled from 'styled-components';
import Project from "./Project";

const ProjectListing = ({projects, heading}) => (
    <>
        <h1>{heading}</h1>
        {
            projects.map(({node}) =>
                <div>
                    <Project
                        heading={node.frontmatter.title}
                        description={node.frontmatter.description}
                        techTags={node.frontmatter.tags}
                        link={node.fields.slug}
                    />
                </div>
            )
        }

    </>
);

const StyledProjectListing = styled(ProjectListing)`
        width: 50%;
        margin: 1em 0;
`;

export default StyledProjectListing;