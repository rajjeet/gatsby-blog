import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';
import * as theme from '../../utils/theme';
import SimplePostListing from '../../components/simple-post-listing';
import SimpleLinkListing from '../../components/simple-link-listing';
import TechStackTagListing from '../../components/tech-stack-tag-listing';
import { TProps } from './types';

const ProjectPage: React.FC<TProps> = ({
  data: {
    project: {
      frontmatter: {
        title, description, techStackTags, links,
      }, body,
    }, posts: { edges: linkedPosts },
  },
}) => (
  <Layout>
    <StyledProject>
      <h1>{title}</h1>
      <div>{description}</div>
      {techStackTags && <TechStackTagListing tags={techStackTags} />}
      <S.ContentContainer>
        {body && <MDXRenderer>{body}</MDXRenderer>}
        <div>
          {links && <SimpleLinkListing links={links} />}
          {linkedPosts && <SimplePostListing posts={linkedPosts} />}
        </div>
      </S.ContentContainer>
    </StyledProject>
  </Layout>
);

const StyledProject = styled.div`    
  h1 {
    margin: 1em auto 0 auto;
  }
`;

const S = {
  ContentContainer: styled.div`          
      > div:first-child {        
        padding: .7em;
        background-color: whitesmoke;
        margin: .7em;
        border-radius: 5px;
        display: inline-block;    
        width: 67%;
        box-shadow: ${theme.boxShadow};
        box-sizing: border-box;        
        @media (max-width: ${theme.tabletBreakpoint}) {
          width: 100%;          
        }
      }
      > div:not(:first-child) {
        padding: .7em;        
        display: inline-block;
        vertical-align: top;                
        width: 29%;
        box-sizing: border-box;
        > div {
          margin-bottom: 2em;
        }
        @media (max-width: ${theme.tabletBreakpoint}) {
          width: 100%;          
        }
      }
`,
};

export default ProjectPage;

export const query = graphql`
    query ($slug: String!) {
        project: mdx(fields: {slug: {eq: $slug}, contentType: {eq: "project"}}) {
            body
            frontmatter {
                title
                tags
                date
                description
                techStackTags {
                    type
                    label
                }
                links {
                    label
                    value
                }
            }
        }
        posts: allMdx(sort:{fields: frontmatter___date, order: DESC}, filter: {frontmatter: {projectSlug: {eq: $slug}}, fields: {contentType: {eq: "post"}}}) {
            edges {
                node {
                    timeToRead
                    frontmatter {
                        title
                        date
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }

`;
