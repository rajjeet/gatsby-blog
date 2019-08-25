import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import IndexPage from '../index';
import {
  createMockGatsbyImageSharpFluid, createMockGroups,
  createMockPosts,
  createMockProjects,
} from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';

beforeEach(() => {
  StaticQuery.mockImplementation(({ render }) => render({
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
    const tree = renderer.create(<IndexPage data={makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
