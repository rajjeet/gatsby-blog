import React from 'react';
import { navigate } from 'gatsby-link';
import styled from 'styled-components';
import { TProps } from './types';

export const TagGroup: React.FC<TProps> = ({ tags, getSlug, inline }) => (
  <Wrapper inline={inline}>
    {
      tags
      && tags.map((tag) => (
        <Tag
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
        </Tag>
      ))
    }
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;  
`;

const Tag = styled.span`
  padding: .2rem .5rem;
  margin-right: .5rem;
  margin-top: .25rem;
  box-shadow: ${(props): string => props.theme.lightBoxShadow};
  border-radius: ${(props): string => props.theme.borderRadius};
  color: ${(props): string => props.theme.white};
  font-weight: bolder;    
  font-size: .8rem;
  background-color: ${(props): string => props.theme.primaryColor};
  :hover {
    cursor: pointer;
    background-color: ${(props): string => props.theme.secondaryColor};
  }
`;

const TagCount = styled.span`
  margin-left: 1em;
`;

