import React from 'react';
import {graphql} from "gatsby";
import Layout from '../components/layout';
import PostListing from '../components/postListing';
import {Header} from "semantic-ui-react";

export default ({data}) => {
    return (
        <Layout>
            <div>
                <Header as={'h3'} style={{marginBottom: '0em'}}>Latest Posts</Header>
                <p style={{color: '#888', marginBottom: '0em'}}>{data.allMarkdownRemark.totalCount} Posts</p>
                <PostListing posts={data.allMarkdownRemark.edges}/>
            </div>
        </Layout>
    );
}
export const query = graphql`
{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          tags
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`;
