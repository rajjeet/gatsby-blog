import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import PostListing from "../components/postListing";

export default ({data, pageContext}) => {
    return (
        <Layout>
            <PostListing posts={data.allMarkdownRemark.edges} heading={pageContext.tag}/>
        </Layout>
    );
};

export const query = graphql`
    query($tag: String!) {
      allMarkdownRemark (
        limit:1000
        sort: {fields: frontmatter___date, order: DESC}
        filter: {frontmatter: {tags: {in: [$tag] }, draft: {ne: true} } }
      ) {
        totalCount
        edges{
          node {
            id            
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              tags
              category
              description
              image {
                childImageSharp  {
                  fixed(width: 250) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }               
            }
            fields{
              slug              
            }
            excerpt(pruneLength: 80)
          }
        }    
      }              
    }
`;
