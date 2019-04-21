import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import PostListing from "../components/postListing";

export default ({data, pageContext}) => {
    return (
        <Layout>
            <PostListing
                posts={data.allMarkdownRemark.edges}
                heading={pageContext.tag}
                numOfPages={pageContext.numOfPages}
                currentPage={pageContext.currentPage}
            />
        </Layout>
    );
};

export const query = graphql`
    query($skip: Int!, $limit: Int!) {
      allMarkdownRemark (
        limit: $limit
        skip: $skip
        sort: {fields: frontmatter___date, order: DESC}
      ) {        
        edges {
          node {
            ...PostListingMarkdownFragment
          }
        }    
      }              
    }
`;
