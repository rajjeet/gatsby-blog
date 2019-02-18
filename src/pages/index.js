import React from 'react';
import {graphql} from "gatsby";
import Layout from '../components/layout';
import PostListing from '../components/postListing';

export default ({data}) => {
    return (
        <Layout>
            <PostListing posts={data.allMarkdownRemark.edges} heading={'Latest Posts'}/>
        </Layout>
    );
}
export const query = graphql`
{
  allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {draft: {ne: true} } }
    ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          tags
          category
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
