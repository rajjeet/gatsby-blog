import { createMockGatsbyImageSharpFluid } from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';

export const makeProps = () => ({
  className: {},
  data: {
    file: createMockGatsbyImageSharpFluid.file,
    site: siteMetadata,
  },
});
