import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import NotFoundPage from '../404';
import { createMockGatsbyImageSharpFluid } from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) => render({
    file: createMockGatsbyImageSharpFluid.file,
    site: siteMetadata,
  }));
});

describe('404 Page', () => {
  it('should render', () => {
    const tree = renderer.create(<NotFoundPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
