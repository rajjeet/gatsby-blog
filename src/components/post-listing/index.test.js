import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import ProjectListing from './index';
import {
  createMockGatsbyImageSharpFluid,
  createMockGroups,
  createMockPosts,
} from '../../utils/testing';

beforeEach(() => {
  StaticQuery.mockImplementation(({ render }) => render(
    {
      allMarkdownRemark: createMockGroups,
      file: createMockGatsbyImageSharpFluid.file,
    },
  ));
});

const makeProps = () => ({
  className: {},
  posts: createMockPosts,
  heading: 'Post Listing',
  numOfPages: 5,
  currentPage: 1,
  paginationSlug: '/sample_slug/',
});

describe('<PaginationButtonGroup />', () => {
  it('should render', () => {
    const tree = renderer.create(<ProjectListing {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
