import { createMockGatsbyImageSharpFluid } from '../../utils/testing';

export const makeProps = () => ({
  heading: 'Sample Heading',
  link: '',
  description: 'This is a sample description',
  className: {},
  thumbnail: createMockGatsbyImageSharpFluid.file.childImageSharp.fluid,
});
