import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';

export default ({data}) => {
    return (
        <Layout>
            <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query ($slug: String!) {
      markdownRemark(fields: {slug: {eq: $slug}, contentType: {eq: "project"}}) {
        id
        html
        fields {
          slug
        }
        frontmatter {
          title
          tags
          date      
          description
          thumbnail {
            publicURL
          }
        }
      }
    }

`;
