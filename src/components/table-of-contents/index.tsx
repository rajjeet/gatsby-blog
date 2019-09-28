import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { TProps } from './types';
import * as theme from '../../utils/theme';

export const TableOfContents: React.FC<TProps> = ({ items, depth = 0 }) => (
  <>
    {
      !depth
      && (
      <HeadingWrapper>
        <Header>Outline</Header>
        <StyledTopLink href="#">
          <span>Top</span>
          <FontAwesomeIcon icon={faArrowAltCircleUp} />
        </StyledTopLink>
      </HeadingWrapper>
      )
    }
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
   margin-bottom: .3rem;
`;

const StyledTopLink = styled.a`
    display: flex;
    justify-content: center;
    background-color: white;
    border: none;
    padding: .5em 1em;    
    box-shadow: ${theme.lightBoxShadow};
    cursor: pointer;
     text-decoration: none;
     color: ${theme.primaryColor};
    :hover {
      background-color: whitesmoke;
    }
    :disabled {
      background-color: whitesmoke;
    }
    span {
      margin-right: .5rem;
    }
    svg {
      max-width: 15px;
    }  
`;
