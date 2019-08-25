import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import PostListing from '../../components/post-listing';

export default ({ data, pageContext }) => (
  <Layout>
    <PostListing
      posts={data.posts.edges}
      heading={pageContext.tag}
      numOfPages={pageContext.numOfPages}
      currentPage={pageContext.currentPage}
      paginationSlug="/blog/"
    />
  </Layout>
);

export const query = graphql`
    query($skip: Int!, $limit: Int!) {
        posts: allMarkdownRemark (
            limit: $limit
            skip: $skip
            sort: {fields: frontmatter___date, order: DESC}
            filter: { fields: { contentType: { eq: "post" } } }
        ) {
            edges {
                node {
                    ...PostListingMarkdownFragment
                }
            }
        }
    }
`;