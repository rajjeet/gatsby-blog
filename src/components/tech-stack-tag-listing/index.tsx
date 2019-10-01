import React from 'react';
import styled from 'styled-components';
import { TProps } from './types';

export const TechStackTagListing: React.FC<TProps> = ({ tags }) => (
  <Wrapper>
    <span>Tech Tags:</span>
    {
      tags.map((tag) => (
        <Tag key={tag.label}>{tag.label}</Tag>
      ))
    }
  </Wrapper>
);

const Wrapper = styled.div`
  margin: .5em auto;   
`;

const Tag = styled.div`
  display: inline-block;
  background-color: ${(props): string => props.theme.primaryColor};
  color: white;
  border-radius: ${(props): string => props.theme.borderRadius};
  font-size: .8rem;
  font-weight: bolder;
  padding: .2rem .5rem;
  margin: .2rem .2rem;
`;

