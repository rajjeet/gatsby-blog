import React from 'react';
import { render } from '@testing-library/react';
import BlogPostListing from './index';
import { makeProps } from './mock';

describe('BlogPostListing', () => {
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
