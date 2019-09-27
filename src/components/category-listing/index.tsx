import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { TagGroup } from '../tag-group';
import { getCategorySlug } from '../../utils/slugs';
import { TProps } from './types';

export const CategoryListing: React.FC<TProps> = ({ className }) => {
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
      <Header>Categories</Header>
      <TagGroup tags={data.categoryGrouping.group} getSlug={getCategorySlug} />
    </div>
  );
};

const Header = styled.h5`
    margin: .5em auto;
`;
