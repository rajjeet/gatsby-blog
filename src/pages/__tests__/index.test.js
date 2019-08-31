import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { StaticQuery } from 'gatsby';
import IndexPage from '../index';
import {
  createMockGatsbyImageSharpFluid, createMockGroups,
  createMockPosts,
  createMockProjects,
} from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';

afterEach(cleanup);

beforeEach(() => {
  StaticQuery.mockImplementation(({ render: renderQuery }) => renderQuery({
    file: createMockGatsbyImageSharpFluid.file,
    site: siteMetadata,
    categoryGrouping: createMockGroups,
  }));
});

const makeProps = () => ({
  projects: {
    edges: createMockProjects,
  },
  posts: {
    edges: createMockPosts,
  },
});

describe('Index Page', () => {
  it('should render', () => {
    const { asFragment } = render(<IndexPage data={makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have side projects', () => {
    const { getByText } = render(<IndexPage data={makeProps()} />);
    expect(getByText('Side Projects')).toMatchSnapshot();
  });

  it('should have latest posts', () => {
    const { getByText } = render(<IndexPage data={makeProps()} />);
    expect(getByText('Latest Posts')).toMatchSnapshot();
  });
});
