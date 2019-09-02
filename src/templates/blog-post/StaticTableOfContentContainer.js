import React from 'react';
import styled from 'styled-components';
import * as theme from '../../utils/theme';

const StaticTableOfContentContainer = ({
  className, htmlContent, onClick, includeHeading,
}) => (
  <div id="static-toc" className={className}>
    {includeHeading && <h4>Outline</h4>}
    <div onClick={onClick} dangerouslySetInnerHTML={{ __html: htmlContent }} />
  </div>
);

const StyledTableOfContentContainer = styled(StaticTableOfContentContainer)`
    a {
      color: #444;
      text-decoration: none;
      :target {
        color: ${theme.primaryColor};
        font-weight: bold;
      }       
      :hover {
        color: ${theme.primaryColor};
        cursor: pointer;        
      }
    } 
    p {
      margin: 0;
    }
    ul {
      list-style: none;
    }
       
    
`;

export default StyledTableOfContentContainer;
