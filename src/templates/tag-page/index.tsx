import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../../components/layout';
import { PostListing } from '../../components/post-listing';
import { TProps } from './types';

const TagPage: React.FC<TProps> = ({
  data: { posts: { edges: taggedPosts } }, pageContext: {
    tag, numOfPages, currentPage, paginationSlug,
  },
}) => (
  <Layout>
    <PostListing
      posts={taggedPosts}
      heading={tag}
      numOfPages={numOfPages}
      currentPage={currentPage}
      paginationSlug={paginationSlug}
    />
  </Layout>
);

export const query = graphql`
    query($tag: String!, $skip: Int!, $limit: Int!) {
        posts: allMdx (
            limit: $limit
            skip: $skip
            sort: {fields: frontmatter___dateCreated, order: DESC}
            filter: {frontmatter: {tags: {in: [$tag] }, draft: {ne: true} }, fields: { contentType: { eq: "post" } } }
        ) {
            edges {
                node {
                    ...PostListingMarkdownFragment
                }
            }
        }
    }
`;

export default TagPage;
