import React from "react";
import styled from 'styled-components';
import * as theme from '../utils/theme';

const TechStackTagListing = ({className, tags}) => (
    <div className={className}>
        Tech Tags:
        {
            tags.map(tag => (
                <span key={tag.label}>{tag.label}</span>
            ))
        }
    </div>
);

const StyledTechStackTagListing = styled(TechStackTagListing)`
  margin: .5em auto;
   span {
   background-color: ${theme.primaryColor};
    color: white;
    border-radius: 5px;
    font-size: .8em;
    font-weight: bolder;
    padding: .2em .5em;
    margin: .2em .4em;
   }
`;

export default StyledTechStackTagListing;