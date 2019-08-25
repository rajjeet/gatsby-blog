import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import ProjectPage from './index';
import {
  createMockGatsbyImageSharpFluid,
  createMockPosts,
  createMockProjects,
} from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';

const makeProps = () => ({
  project: createMockProjects[0].node,
  posts: {
    edges: createMockPosts,
  },
});

beforeEach(() => {
  StaticQuery.mockImplementation(({ render }) => render(
    {
      file: createMockGatsbyImageSharpFluid.file,
      site: siteMetadata,
    },
  ));
});

describe('ProjectPage', () => {
  it('should render', () => {
    const tree = renderer.create(<ProjectPage data={makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
