import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { StaticQuery } from 'gatsby';
import BlogPostListing from './index';
import {
  createMockGatsbyImageSharpFluid,
  createMockGroups,
  createMockPosts,
} from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';

afterEach(cleanup);

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
  StaticQuery.mockImplementation(({ render: renderQuery }) => renderQuery(
    {
      file: createMockGatsbyImageSharpFluid.file,
      site: siteMetadata,
      categoryGrouping: createMockGroups.categoryGrouping,
    },
  ));
});

describe('BlogPostListing', () => {
  it('should render', () => {
    const { asFragment } = render(<BlogPostListing {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have the layout header', () => {
    const { getByText } = render(<BlogPostListing {...makeProps()} />);
    expect(getByText('Ortmesh')).toBeDefined();
  });

  it('should contain the blog posts', () => {
    const { getByText } = render(<BlogPostListing {...makeProps()} />);
    expect(getByText('Adding a Project Section to My Website')).toBeDefined();
    expect(getByText('State Management using React Hooks')).toBeDefined();
  });
});
