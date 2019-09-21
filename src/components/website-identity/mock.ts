import { createMockGatsbyImageSharpFluid } from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';
import { TProps } from './types';

export const makeProps = (): TProps => ({
  data: {
    file: createMockGatsbyImageSharpFluid.file,
    site: siteMetadata,
  },
});
