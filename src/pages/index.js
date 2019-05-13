import React from 'react';
import {graphql} from "gatsby";
import Layout from '../components/Layout';
import PostListing from '../components/PostListing';
import SEO from "../components/SEO";
import ProjectListing from "../components/ProjectListing";


export default ({data}) => {
    return (
        <Layout>
            <SEO/>
            <ProjectListing
                projects={data.projects.edges}
                heading={'Side Projects'}
            />
            <PostListing
                posts={data.posts.edges}
                heading={'Latest Posts'}
            />
        </Layout>
    );
}
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
