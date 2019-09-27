import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { TagGroup } from '../tag-group';
import { getTagSlug } from '../../utils/slugs';

export const TagListing: React.FC<{}> = () => {
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
    <div>
      <Header>Tags</Header>
      <TagGroup tags={data.categoryGrouping.group} getSlug={getTagSlug} />
    </div>
  );
};

const Header = styled.h5`
  margin: .5em auto;
`;

