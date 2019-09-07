import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  list-style: none;
  padding-left: 10px;
`;

const StyledLink = styled.a`
   text-decoration: none;
   color: black;
`;

const TableOfContents = ({ items, depth = 0 }) => (
  <>
    {!depth && <h4>Outline</h4>}
    <ListWrapper id="static-toc">
      {
          items.map((item) => (
            <div key={item.url}>
              <StyledLink href={item.url}>
                <li>{item.title}</li>
              </StyledLink>
              {item.items && <TableOfContents items={item.items} depth={depth + 1} />}
            </div>
          ))
        }
    </ListWrapper>
  </>
);

export default TableOfContents;
