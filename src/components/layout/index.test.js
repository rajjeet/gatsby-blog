import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import Layout from './index';
import { createMockGatsbyImageSharpFluid } from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';

const makeProps = () => ({
  children: <div>Sample child</div>,
});

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) => render({
    file: createMockGatsbyImageSharpFluid.file,
    site: siteMetadata,
  }));
});

describe('<Layout />', () => {
  it('should render', () => {
    const tree = renderer.create(<Layout {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
