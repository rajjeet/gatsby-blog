import React from 'react';
import {graphql} from 'gatsby';

export default ({data}) => {
    return (
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}>
        </div>
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
