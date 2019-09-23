import React from 'react';
import styled from 'styled-components';
import { TProps } from './types';
import { Button } from '../primitives/button';
import * as theme from '../../utils/theme';

export const TableOfContents: React.FC<TProps> = ({ items, depth = 0 }) => (
  <>
    {
      !depth
      && (
      <HeadingWrapper>
        <Header>Outline</Header>
        <Button onClick={(): void => window.location.assign('#')}>
          Back to Top
        </Button>
      </HeadingWrapper>
      )
    }
    <ListWrapper id="static-toc">
      {
        items.map((item) => (
          <div key={item.url}>
            <StyledLink onClick={(): void => window.location.assign(item.url)}>
              <li>{item.title}</li>
            </StyledLink>
            {item.items && <TableOfContents items={item.items} depth={depth + 1} />}
          </div>
        ))
      }
    </ListWrapper>
  </>
);

const ListWrapper = styled.ul`
  list-style: none;
  padding-left: 10px;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  @media screen and (min-width: ${theme.computerBreakpoint}){    
    flex-direction: row;
    align-items: center;  
    justify-content: space-between;
  }
`;

const Header = styled.h4`
`;

const StyledLink = styled.a`
   text-decoration: none;
   color: black;
`;
