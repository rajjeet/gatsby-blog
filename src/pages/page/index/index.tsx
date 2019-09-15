import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../../components/layout';
import PostListing from '../../../components/post-listing';
import Seo from '../../../components/seo';
import ProjectListing from '../../../components/project-listing';
import { TPostEdge, TImage } from '../../../templates/category-page/types';

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
    <ProjectListing
      projects={data.projects.edges}
      heading="Side Projects"
    />
    <PostListing
      posts={data.posts.edges}
      heading="Latest Posts"
    />
  </Layout>
);

export default IndexPage;

export const query = graphql`
    {
        posts: allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {draft: {ne: true}}, fields: {contentType: {eq: "post"}}}, limit: 3) {
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
