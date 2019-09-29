import React from 'react';
import styled from 'styled-components';
import { PaginationButtonGroup } from '../pagination-button-group';
import { TPaginationProps } from './types';

export const Pagination: React.FC<TPaginationProps> = (
  { currentPage, numOfPages, paginationSlug },
) => {
  const showPostNavigationButtons = currentPage && numOfPages && numOfPages > 1;
  return showPostNavigationButtons ? (
    <Wrapper>
      <PaginationLabel>
        {`${currentPage} of ${numOfPages} Pages`}
      </PaginationLabel>
      <PaginationButtonGroup
        currentPage={currentPage}
        numOfPages={numOfPages}
        paginationSlug={paginationSlug}
      />
    </Wrapper>
  ) : null;
};

const Wrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const PaginationLabel = styled.div`
  color: #888;
`;
