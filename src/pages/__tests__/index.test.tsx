import React from 'react';
import { cleanup, render } from '@testing-library/react';
import IndexPage from '../index';
import {
  createMockPosts,
  createMockProjects,
} from '../../utils/testing';

afterEach(cleanup);

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
    expect(getByText('Side Projects')).toBeDefined();
  });

  it('should have latest posts', () => {
    const { getByText } = render(<IndexPage data={makeProps()} />);
    expect(getByText('Latest Posts')).toBeDefined();
  });
});
