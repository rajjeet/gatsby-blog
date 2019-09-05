import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { StaticQuery } from 'gatsby';
import Seo from './index';
import siteMetadata from '../../../gatsby-config';

afterEach(cleanup);

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render: renderQuery }) => renderQuery({
    site: siteMetadata,
  }));
});

describe('<Seo />', () => {
  it('should render', () => {
    const { asFragment } = render(<Seo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
