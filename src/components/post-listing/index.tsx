import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import * as theme from '../../utils/theme';

import { TProps } from './types';
import { Pagination } from './pagination';
import { Post } from './post';

export const PostListing: React.FC<TProps> = (
  {
    posts, heading, numOfPages, currentPage, paginationSlug,
  },
) => (
  <Wrapper>
    {heading && <PostListingHeader>{heading}</PostListingHeader>}
    <Pagination currentPage={currentPage} numOfPages={numOfPages} paginationSlug={paginationSlug} />
    <PostListingWrapper>
      {
        posts.map(({ node }) => <Post key={node.id} node={node} />)
      }
    </PostListingWrapper>
  </Wrapper>
);

const PostListingHeader = styled.h1`
`;

const PostListingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media screen and (min-width: ${theme.tabletBreakpoint}){
    grid-auto-rows: 320px;
  }
  grid-auto-rows: 400px;
  grid-gap: 1em;    
`;

const Wrapper = styled.div`
  
  `;

export const query = graphql`
    fragment PostListingMarkdownFragment on Mdx {
        id
        timeToRead
        frontmatter {
            title
            dateCreated(formatString: "DD MMM, YYYY")
            tags
            description
            image {
                childImageSharp  {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        fields {
            slug
        }
        excerpt(pruneLength: 80)
    }
`;
