import React from 'react';
import { TProps } from './types';
import { createMockGatsbyImageSharpFluid } from '../../utils/testing';
import { siteMetadata } from '../../../gatsby-config';

export const makeProps = (): TProps => ({
  children: <div>Sample child</div>,
  data: {
    file: createMockGatsbyImageSharpFluid.file,
    site: siteMetadata,
  },
});

