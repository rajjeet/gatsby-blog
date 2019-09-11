import { createMockGatsbyImageSharpFluid } from '../../utils/testing';

export const makeProps = () => ({
  heading: 'Sample Project',
  link: '',
  description: 'This is a sample project description',
  className: {},
  thumbnail: createMockGatsbyImageSharpFluid.file.childImageSharp.fluid,
});
