import React from 'react';
import renderer from 'react-test-renderer';
import ProjectListing from './index';

const makeProps = () => ({
  className: {},
  posts: [],
  heading: 'Post Listing',
  numOfPages: 5,
  currentPage: 1,
  paginationSlug: '/sample_slug/',
});

describe('<PaginationButtonGroup />', () => {
  it.skip('should render', () => {
    const tree = renderer.create(<ProjectListing {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
