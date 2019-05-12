import React from 'react';
import {graphql, StaticQuery} from "gatsby";
import TagGroup from './TagGroup';
import {getTagSlug} from "../utils/helperFunctions";
import styled from 'styled-components';

const TagListing = ({className}) => (
    <StaticQuery query={
        graphql`
         query {
          allMarkdownRemark(limit: 2000, filter: { frontmatter: { draft: { ne: true } }, fields: { contentType: { eq: "post" } } } ) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
        `}

                 render={data => (
                     <div className={className}>
                         <h5>Tags</h5>
                         <TagGroup tags={data.allMarkdownRemark.group} getSlug={getTagSlug}/>
                     </div>
                 )}
    />
);

const StyledTagListing = styled(TagListing)`
  h5 {
    margin: .5em auto;
  }
`;

export default StyledTagListing;