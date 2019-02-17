import React from 'react';
import {graphql} from "gatsby";
import Layout from '../components/layout';
import PostListing from '../components/postListing';
import TagListing from '../components/tagListing';
import {Grid} from "semantic-ui-react";

export default ({data}) => {
    return (
        <Layout>
            <Grid stackable>
                <Grid.Column width={12}>
                    <PostListing posts={data.allMarkdownRemark.edges} heading={'Latest Posts'}/>
                </Grid.Column>
                <Grid.Column width={4}>
                    <TagListing />
                </Grid.Column>
            </Grid>
        </Layout>
    );
}
export const query = graphql`
{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          tags
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
