import React from 'react';
import {graphql} from "gatsby";
import Layout from '../components/layout';
import PostListing from '../components/postListing';
import SEO from "../components/SEO";
import {PortfolioPreview} from "../components/PortfolioPreview";


export default ({data}) => {
    return (
        <Layout>
            <SEO/>
            <PostListing
                posts={data.allMarkdownRemark.edges}
                heading={'Latest Posts'}
            />
        </Layout>
    );
}
export const query = graphql`
{
  allMarkdownRemark(
      sort: { fields: [ frontmatter___date ], order: DESC }
      filter: { frontmatter: { draft: { ne: true } }, fields: { contentType: { eq: "post" } } }
      limit: 3
    ) {    
    edges {
      node {
        ...PostListingMarkdownFragment
      }
    }
  }
}
`;
