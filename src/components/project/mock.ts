import { createMockGatsbyImageSharpFluid } from '../../utils/testing';
import { TProps } from './types';

export const makeProps = (): TProps => ({
  heading: 'Sample Project',
  link: '',
  description: 'This is a sample project description',
  thumbnail: createMockGatsbyImageSharpFluid.file.childImageSharp.fluid,
});

