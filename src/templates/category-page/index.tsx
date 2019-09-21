import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../../components/layout';
import { PostListing } from '../../components/post-listing';
import { TProps } from './types';

const CategoryPage: React.FC<TProps> = ({ data, pageContext }) => (
  <Layout>
    <PostListing
      posts={data.posts.edges}
      heading={pageContext.category}
      numOfPages={pageContext.numOfPages}
      currentPage={pageContext.currentPage}
      paginationSlug={pageContext.paginationSlug}
    />
  </Layout>
);

export default CategoryPage;

export const query = graphql`
    query($category: String!, $skip: Int!, $limit: Int!) {
        posts: allMdx (
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
