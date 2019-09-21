import { navigate } from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';
import Button from '../primitives/button';
import PaginationButtonGroup from '../pagination-button-group';
import { TPaginationProps } from './types';

export const Pagination: React.FC<TPaginationProps> = (
  { currentPage, numOfPages, paginationSlug },
) => {
  const showPostNavigationButtons = currentPage && numOfPages && numOfPages > 1;
  return showPostNavigationButtons ? (
    <>
      <PaginationLabel>
        {`${currentPage} of ${numOfPages} Pages`}
      </PaginationLabel>
      <PaginationButtonGroup
        currentPage={currentPage}
        numOfPages={numOfPages}
        paginationSlug={paginationSlug}
      />
    </>
  ) : (
    <Button onClick={(): void => navigate('/blog/1')}>
      See All Posts
    </Button>
  );
};

const PaginationLabel = styled.div`
  color: #888;
  margin-bottom: .3em;
`;
