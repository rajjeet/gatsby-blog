import { TProps } from './types';
import { mockGatsbyImageSharpFluid } from "../../fixtures/gatsby-images";

export const makeProps = (): TProps => ({
  heading: 'Sample Project',
  link: '',
  description: 'This is a sample project description',
  thumbnail: mockGatsbyImageSharpFluid.file.childImageSharp.fluid,
});

