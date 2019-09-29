import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 20px;    
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
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
