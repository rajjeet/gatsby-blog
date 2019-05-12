import React from 'react';
import {graphql, StaticQuery} from "gatsby";
import TagGroup from './TagGroup';
import styled from 'styled-components';
import {getCategorySlug} from "../utils/helperFunctions";

const CategoryListing = ({className}) => (
    <StaticQuery query={
        graphql`
         query {
          allMarkdownRemark( limit: 2000, filter: { frontmatter: {draft: {ne: true} }, fields: { contentType: { eq: "post" } } } ) {
            group( field: frontmatter___category ) {
              fieldValue
              totalCount
            }
          }
        }
        `}

                 render={data => (
                     <div className={className}>
                         <h5>Categories</h5>
                         <TagGroup tags={data.allMarkdownRemark.group} getSlug={getCategorySlug} />
                     </div>
                 )}
    />
);

const StyledCategoryListing = styled(CategoryListing)`
  h5 {
    margin: .5em auto;
  } 
`;


export default StyledCategoryListing;