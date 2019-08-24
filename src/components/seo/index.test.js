import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import Seo from './index';
import siteMetadata from '../../../gatsby-config';

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) => render({
    site: siteMetadata,
  }));
});

describe('<Seo />', () => {
  it('should render', () => {
    const tree = renderer.create(<Seo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
