import { createMockGatsbyImageSharpFluid } from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';
import { TProps } from './types';

export const makeProps = (): TProps => ({
  className: '',
  data: {
    file: createMockGatsbyImageSharpFluid.file,
    site: siteMetadata,
  },
});
