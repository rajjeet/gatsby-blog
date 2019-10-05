import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout } from '../../components/layout';
import { theme } from '../../utils/theme';
import { SimplePostListing } from '../../components/simple-post-listing';
import { SimpleLinkListing } from '../../components/simple-link-listing';
import { TechStackTagListing } from '../../components/tech-stack-tag-listing';
import { TProps } from './types';
import { MarkdownMdxProvider } from '../../utils/markdown-mdx-provider';

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
        <MarkdownMdxProvider content={body} />
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
        padding: .7rem;
        background-color: ${(props): string => props.theme.lightBackgroundColor};
        margin: .7rem;
        border-radius: ${(props): string => props.theme.borderRadius};
        display: inline-block;    
        width: 67%;
        box-shadow: ${(props): string => props.theme.boxShadow};
        box-sizing: border-box;        
        @media screen and ${theme.deviceSize.tablet} {
          width: 100%;          
        }
      }
      > div:not(:first-child) {
        padding: .7rem;        
        display: inline-block;
        vertical-align: top;                
        width: 29%;
        box-sizing: border-box;
        > div {
          margin-bottom: 2rem;
        }
        @media screen and ${theme.deviceSize.tablet} {
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
