import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../../../components/layout';
import { PostListing } from '../../../components/post-listing';
import { Seo } from '../../../components/seo';
import { TImage, TPostEdge } from '../../../templates/blog-post-listing/types';
import { TagListing } from '../../../components/tag-listing';

export type TProjectEdge = {
  node: {
    frontmatter: {
      title: string;
      description: string;
      thumbnail: TImage;
      techStackTags: {label: string; type: string}[];
      links: {label: string; value: string}[];
    };
    fields: {
      slug: string;
    };
    body: string;
  };
};

export type TProps = {
  data: {
    posts: {
      edges: TPostEdge[];
    };
    projects: {
      edges: TProjectEdge[];
    };
  };
};

const IndexPage: React.FC<TProps> = ({ data }) => (
  <Layout>
    <Seo />
    <PostListing
      posts={data.posts.edges}
      heading="Recent Posts"
    />
    <TagListing />
  </Layout>
);

export default IndexPage;

export const query = graphql`
    {
        posts: allMdx(sort: {fields: [frontmatter___dateCreated], order: DESC}, filter: {frontmatter: {draft: {ne: true}}, fields: {contentType: {eq: "post"}}}, limit: 6) {
            edges {
                node {
                    ...PostListingMarkdownFragment
                }
            }
        }
        projects: allMdx(limit: 2, sort: {fields: frontmatter___date, order: DESC}, filter: {fields: {contentType: {eq: "project"}}}) {
            edges {
                node {
                    ...ProjectListingMarkdownFragment
                }
            }
        }
    }
`;
