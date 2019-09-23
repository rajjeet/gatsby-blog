import { navigate } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../primitives/button';
import { TProps } from './mock';

const PaginationButtonGroup: React.FC<TProps> = ({
  className, currentPage, numOfPages, paginationSlug,
}) => (
  <div className={className}>
    <Button
      disabled={currentPage <= 1}
      onClick={(): void => navigate(`${paginationSlug}${currentPage - 1}`)}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
      &nbsp;
      Newer Posts
    </Button>
    <Button
      disabled={currentPage >= numOfPages}
      onClick={(): void => navigate(`${paginationSlug}${currentPage + 1}`)}
    >
      Older Posts
      &nbsp;
      <FontAwesomeIcon icon={faChevronRight} />
    </Button>
  </div>
);

const StyledPaginationButtonGroup = styled(PaginationButtonGroup)`
`;

export default StyledPaginationButtonGroup;
