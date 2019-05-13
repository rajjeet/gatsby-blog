import {navigate} from "gatsby";
import React from "react";
import styled from 'styled-components';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import Button from "./Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PaginationButtonGroup = ({className, currentPage, numOfPages, paginationSlug}) => {
    return <div className={className}>
        <Button
            disabled={currentPage <= 1}
            onClick={() => navigate(`${paginationSlug}${currentPage - 1}`)}
        >
            <FontAwesomeIcon icon={faChevronLeft}/>
            &nbsp;
            Newer Posts
        </Button>
        <Button
            disabled={currentPage >= numOfPages}
            onClick={() => navigate(`${paginationSlug}${currentPage + 1}`)}
            icon={faChevronRight}
        >
            Older Posts
            &nbsp;
            <FontAwesomeIcon icon={faChevronRight}/>
        </Button>
    </div>;
};

const StyledPaginationButtonGroup = styled(PaginationButtonGroup)`
`;

export default StyledPaginationButtonGroup;