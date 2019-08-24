import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostListing from '../components/post-listing';

export default ({ data, pageContext }) => (
  <Layout>
    <PostListing
      posts={data.allMarkdownRemark.edges}
      heading={pageContext.category}
      numOfPages={pageContext.numOfPages}
      currentPage={pageContext.currentPage}
      paginationSlug={pageContext.paginationSlug}
    />
  </Layout>
);

export const query = graphql`
    query($category: String!, $skip: Int!, $limit: Int!) {
        allMarkdownRemark (
            limit: $limit
            skip: $skip
            sort: {fields: frontmatter___date, order: DESC}
            filter: {frontmatter: {category: {eq: $category }, draft: {ne: true} }, fields: { contentType: { eq: "post" } } }
        ) {
            edges{
                node {
                    ...PostListingMarkdownFragment
                }
            }
        }
    }
`;
