import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import TagGroup from '../tag-group';
import { getCategorySlug } from '../../utils/slugs';
import { TProps } from './types';

const CategoryListing: React.FC<TProps> = ({ className }) => {
  const data = useStaticQuery(
    graphql`
        query {
            categoryGrouping: allMdx( limit: 2000, filter: { frontmatter: {draft: {ne: true} }, fields: { contentType: { eq: "post" } } } ) {
                group( field: frontmatter___category ) {
                    fieldValue
                    totalCount
                }
            }
        }
    `,
  );

  return (
    <div className={className}>
      <h5>Categories</h5>
      <TagGroup tags={data.categoryGrouping.group} getSlug={getCategorySlug} />
    </div>
  );
};

const StyledCategoryListing = styled(CategoryListing)`
  h5 {
    margin: .5em auto;
  } 
`;

export default StyledCategoryListing;
