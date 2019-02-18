import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import PostListing from "../components/postListing";

export default ({data, pageContext}) => {
    return (
        <Layout>
            <PostListing posts={data.allMarkdownRemark.edges} heading={pageContext.category}/>
        </Layout>
    );
};

export const query = graphql`
    query($category: String!) {
      allMarkdownRemark (
        limit:1000
        sort: {fields: frontmatter___date, order: DESC}
        filter: {frontmatter: {category: {eq: $category }, draft: {ne: true} } }
      ) {
        totalCount
        edges{
          node {
            id            
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              tags
              category
            }
            fields{
              slug              
            }
            excerpt
          }
        }    
      }              
    }
`;
