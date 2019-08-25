import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import AboutPage from '../about';
import { createMockGatsbyImageSharpFluid } from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';

beforeEach(() => {
  StaticQuery.mockImplementation(({ render }) => render({
    file: createMockGatsbyImageSharpFluid.file,
    site: siteMetadata,
  }));
});

describe('404 Page', () => {
  it('should render', () => {
    const tree = renderer.create(<AboutPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
