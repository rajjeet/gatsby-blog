import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import TagPage from './index';
import {
  createMockGatsbyImageSharpFluid,
  createMockGroups,
  createMockPosts,
} from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';

const makeProps = () => ({
  data: {
    posts: {
      edges: createMockPosts,
    },
  },
  pageContext: {
    limit: 5,
    skip: 2,
    numOfPages: 2,
    numOfPosts: 10,
    currentPage: 3,
  },
});

beforeEach(() => {
  StaticQuery.mockImplementation(({ render }) => render(
    {
      file: createMockGatsbyImageSharpFluid.file,
      site: siteMetadata,
      categoryGrouping: createMockGroups.categoryGrouping,
    },
  ));
});

describe('TagPage', () => {
  it('should render', () => {
    const tree = renderer.create(<TagPage {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
