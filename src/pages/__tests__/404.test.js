import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { StaticQuery } from 'gatsby';
import NotFoundPage from '../404';
import { createMockGatsbyImageSharpFluid } from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';

afterEach(cleanup);

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render: renderQuery }) => renderQuery({
    file: createMockGatsbyImageSharpFluid.file,
    site: siteMetadata,
  }));
});

describe('404 Page', () => {
  it('should render', () => {
    const { asFragment } = render(<NotFoundPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
