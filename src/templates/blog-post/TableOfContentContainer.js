import React from 'react';
import styled from 'styled-components';
import * as theme from '../../utils/theme';

const TableOfContentContainer = ({ className, htmlContent }) => (
  <div className={className}>
    <h4>Outline</h4>
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  </div>
);

const StyledTableOfContentContainer = styled(TableOfContentContainer)`
    a {
      color: #444;
      :hover {
        color: ${theme.primaryColor};
        cursor: pointer;
      }
    } 
       
    > div > ul {
      list-style-type: none;
      padding-left: 0;
      > li {
        margin-bottom: .3em;
        > p {
        margin-bottom: 0;
        }
      }              
    }
`;

export default StyledTableOfContentContainer;
