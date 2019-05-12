import {navigate} from "gatsby-link";
import React from "react";
import styled from 'styled-components';
import * as theme from '../utils/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const PaginationButtonGroup = ({className, currentPage, numOfPages, paginationSlug}) => {
    return <div className={className}>
        <button
            disabled={currentPage <= 1}
            onClick={() => navigate(`${paginationSlug}${currentPage - 1}`)}>
            <FontAwesomeIcon icon={faChevronLeft} /> Newer Posts
        </button>
        <button
            disabled={currentPage >= numOfPages}
            onClick={() => navigate(`${paginationSlug}${currentPage + 1}`)}>
            Older Posts <FontAwesomeIcon icon={faChevronRight} />
        </button>
    </div>;
};

const StyledPaginationButtonGroup = styled(PaginationButtonGroup)`
  button {
    background-color: white;
    outline: none;
    border: none;
    padding: .5em 1em;
    margin: .2em auto;
    box-shadow: ${theme.lightBoxShadow};
    cursor: pointer;
    :hover {
      background-color: whitesmoke;
    }
    :disabled {
      background-color: whitesmoke;
    }
  }
`;

export default StyledPaginationButtonGroup;