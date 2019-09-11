import React from 'react';
import { cleanup, render } from '@testing-library/react';
import BlogPostListing from './index';
import { makeProps } from './mock';

afterEach(cleanup);

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
