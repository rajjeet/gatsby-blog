import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostListing from '../components/post-listing';
import Seo from '../components/seo';
import ProjectListing from '../components/project-listing';

export default ({ data }) => (
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
export const query = graphql`
    {
        posts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {draft: {ne: true}}, fields: {contentType: {eq: "post"}}}, limit: 3) {
            edges {
                node {
                    ...PostListingMarkdownFragment
                }
            }
        }
        projects: allMarkdownRemark(limit: 2, sort: {fields: frontmatter___date, order: DESC}, filter: {fields: {contentType: {eq: "project"}}}) {
            edges {
                node {
                    ...ProjectListingMarkdownFragment
                }
            }
        }
    }
`;
