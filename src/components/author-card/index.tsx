import React from 'react';
import styled from 'styled-components';
import { Headshot } from '../headshot';

export const AuthorCard: React.FC<{}> = () => (
  <Wrapper>
    <Headshot />
    <h2>Rajjeet Phull</h2>
    <div>
Welcome to my personal blog, Ortmesh! Here, I journal my journey as a web developer. My aim is to
        build interesting side projects around cloud computing and web development.
      {' '}
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;    
`;
