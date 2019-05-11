import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import {Link} from 'gatsby';
import * as theme from '../utils/colors'

export default ({data}) => {
    return (
        <Layout>
            <StyledProject>
                <h1>{data.project.frontmatter.title}</h1>
                <span>{data.project.frontmatter.date}</span>
                <p>{data.project.frontmatter.description}</p>
                <S.ContentContainer>
                    <div style={{padding: '.7em', backgroundColor: 'whitesmoke', margin: '.7em', borderRadius: '5px'}}
                         dangerouslySetInnerHTML={{__html: data.project.html}}/>
                    <div style={{padding: '.7em'}}>
                        <h3>Blog Posts</h3>
                        <ul style={{listStyle: 'none', marginLeft: '0', paddingLeft: '0'}}>
                            {
                                data.posts.edges.map(({node}) => (
                                    <li style={{
                                        marginBottom: '.25em',
                                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                                        padding: '.7em',
                                        borderRadius: '5px'
                                    }}>
                                        <Link to={node.fields.slug} style={{textDecoration: "none", color: "black"}}>
                                            <h4 style={{marginBottom: '0'}}>{node.frontmatter.title}</h4>
                                            <div style={{fontSize: '.8em'}}>
                                                <span>{node.frontmatter.date}</span>
                                                <span>&emsp;{node.timeToRead} mins read</span>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
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
        display: inline-block;    
        width: 67%;
        @media (max-width: ${theme.tabletBreakpoint}) {
          width: 100%;          
        }
      }
      > div:last-of-type {
        display: inline-block;
        vertical-align: top;
        width: 29%;
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
