import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import * as theme from '../utils/theme'
import SimplePostListing from "../components/SimplePostListing";
import SimpleLinkListing from "../components/SimpleLinkListing";
import TechStackTagListing from "../components/TechStackTagListing";

export default ({data}) => {
    return (
        <Layout>
            <StyledProject>
                <h1>{data.project.frontmatter.title}</h1>
                <span>{data.project.frontmatter.date}</span>
                <div>{data.project.frontmatter.description}</div>
                {data.project.frontmatter.techStackTags && <TechStackTagListing tags={data.project.frontmatter.techStackTags} />}
                <S.ContentContainer>
                    <div dangerouslySetInnerHTML={{__html: data.project.html}}/>
                    <div>
                        {data.project.frontmatter.links && <SimpleLinkListing links={data.project.frontmatter.links} />}
                        {data.posts && <SimplePostListing posts={data.posts.edges}/>}
                    </div>
                </S.ContentContainer>
            </StyledProject>
        </Layout>
    );
};

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
        
        @media (max-width: ${theme.tabletBreakpoint}) {
          width: 100%;          
        }
      }
      > div:not(:first-child) {
        padding: .7em;        
        display: inline-block;
        vertical-align: top;                
        width: 29%;
        > div {
          margin-bottom: 2em;
        }
        @media (max-width: ${theme.tabletBreakpoint}) {
          width: 100%;          
        }
      }
`
};

export const query = graphql`
query ($slug: String!) {
  project: markdownRemark(fields: {slug: {eq: $slug}, contentType: {eq: "project"}}) {
    html
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
  posts: allMarkdownRemark(sort:{fields: frontmatter___date, order: DESC}, filter: {frontmatter: {projectSlug: {eq: $slug}}, fields: {contentType: {eq: "post"}}}) {
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
