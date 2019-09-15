import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import TagGroup from '../tag-group';
import { getTagSlug } from '../../utils/slugs';
import { TProps } from './types';

const TagListing: React.FC<TProps> = ({ className }) => {
  const data = useStaticQuery(
    graphql`
        query {
            categoryGrouping: allMdx(limit: 2000, filter: { frontmatter: { draft: { ne: true } }, fields: { contentType: { eq: "post" } } } ) {
                group(field: frontmatter___tags) {
                    fieldValue
                    totalCount
                }
            }
        }
    `,
  );
  return (
    <div className={className}>
      <h5>Tags</h5>
      <TagGroup tags={data.categoryGrouping.group} getSlug={getTagSlug} />
    </div>
  );
};

const StyledTagListing = styled(TagListing)`
  h5 {
    margin: .5em auto;
  }
`;

export default StyledTagListing;
