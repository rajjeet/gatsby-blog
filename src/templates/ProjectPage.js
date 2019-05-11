import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import * as theme from '../utils/colors'
import SimplePostListing from "../components/SimplePostListing";


export default ({data}) => {
    return (
        <Layout>
            <StyledProject>
                <h1>{data.project.frontmatter.title}</h1>
                <span>{data.project.frontmatter.date}</span>
                <p>{data.project.frontmatter.description}</p>
                <S.ContentContainer>
                    <div dangerouslySetInnerHTML={{__html: data.project.html}}/>
                    { data.posts && <SimplePostListing posts={data.posts.edges} /> }
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
      > div:last-of-type {
        display: inline-block;
        vertical-align: top;
        width: 29%;
        @media (max-width: ${theme.tabletBreakpoint}) {
          width: 100%;          
        }
      }
`
};

export const query = graphql`
query ($slug: String = "/projects/kitchen-quoter/") {
  project: markdownRemark(fields: {slug: {eq: $slug}, contentType: {eq: "project"}}) {
    html
    frontmatter {
      title
      tags
      date
      description
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
