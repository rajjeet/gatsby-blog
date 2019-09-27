import React from 'react';
import styled from 'styled-components';
import * as theme from '../../utils/theme';
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
  background-color: ${theme.primaryColor};
  color: white;
  border-radius: 5px;
  font-size: .8em;
  font-weight: bolder;
  padding: .2em .5em;
  margin: .2em .2em;
`;

