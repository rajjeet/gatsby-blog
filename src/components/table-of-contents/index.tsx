import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { TProps } from './types';
import { theme } from '../../utils/theme';

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
    <ListWrapper id="static-toc" data-testid="static-toc">
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
  padding-left: .5rem;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  @media screen and ${theme.deviceSize.laptop}{    
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
   margin-bottom: .5rem;
`;

const StyledTopLink = styled.a`
    display: flex;
    justify-content: center;
    border: none;
    padding: .5rem 1rem;    
    box-shadow: ${(props): string => props.theme.lightBoxShadow};
    cursor: pointer;
     text-decoration: none;
     color: ${(props): string => props.theme.primaryColor};
    :hover, :disabled {
      background-color: ${(props): string => props.theme.lightBackgroundColor};
    }
    span {
      margin-right: .5rem;
    }
    svg {
      max-width: 1.5rem;
    }  
`;
