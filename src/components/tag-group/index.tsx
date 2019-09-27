import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import * as theme from '../../utils/theme';
import { TProps } from './types';

export const TagGroup: React.FC<TProps> = ({ tags, getSlug, inline }) => (
  <Wrapper inline={inline}>
    {
      tags
      && tags.map((tag) => (
        <StyledSpan
          role="link"
          tabIndex={0}
          key={tag.fieldValue}
          onClick={(e): void => {
            e.preventDefault();
            navigate(`${getSlug(tag.fieldValue)}1`);
          }}
        >
          {tag.fieldValue}
          {tag.totalCount && <TagCount>{tag.totalCount}</TagCount>}
        </StyledSpan>
      ))
    }
  </Wrapper>
);

const Wrapper = styled.div`
  display: ${(props): string => (props.inline ? 'inline' : 'inline-block')};
`;

const StyledSpan = styled.span`
  padding: .2em .55em;
  margin-right: .5em;
  margin-bottom: .5em;
  box-shadow: ${theme.lightBoxShadow};
  display: inline-block;
  border-radius: 5px;
  color: white;
  font-weight: bolder;    
  font-size: .8em;
  background-color: ${theme.primaryColor};
  :hover {
    box-shadow: ${theme.hoverBoxShadow};
    transform: translateY(-2px);
    transition: ease .3s;
    cursor: pointer;
  }
`;

const TagCount = styled.span`
  margin-left: 1em;
`;

