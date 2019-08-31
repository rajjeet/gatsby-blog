import React from 'react';
import styled from 'styled-components';
import * as theme from '../../utils/theme';

const TechStackTagListing = ({ className, tags }) => (
  <div className={className}>
    <span>Tech Tags:</span>
    {
      tags.map((tag) => (
        <div key={tag.label}>{tag.label}</div>
      ))
    }
  </div>
);

const StyledTechStackTagListing = styled(TechStackTagListing)`
  margin: .5em auto;
   div {
   display: inline-block;
   background-color: ${theme.primaryColor};
    color: white;
    border-radius: 5px;
    font-size: .8em;
    font-weight: bolder;
    padding: .2em .5em;
    margin: .2em .2em;
   }
`;

export default StyledTechStackTagListing;
