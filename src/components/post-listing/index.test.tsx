import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { PostListing } from './index';
import { makeProps } from './mock';

afterEach(cleanup);

describe('<PostListing />', () => {
  it('should show the post titles', () => {
    const { getByText } = render(<PostListing {...makeProps()} />);
    expect(getByText('Adding a Project Section to My Website')).toBeDefined();
    expect(getByText('State Management using React Hooks')).toBeDefined();
  });

  it('should show the post descriptions', () => {
    const { getByText } = render(<PostListing {...makeProps()} />);
    expect(getByText(/I was learning about the new React Hooks/)).toBeDefined();
    expect(getByText(/Over the past year, I truly learned/)).toBeDefined();
  });

  it('should show the time to read metric of each post', () => {
    const { getByText } = render(<PostListing {...makeProps()} />);
    expect(getByText(/2 min read/)).toBeDefined();
    expect(getByText(/4 min read/)).toBeDefined();
  });

  it('should show the post date', () => {
    const { getByText } = render(<PostListing {...makeProps()} />);
    expect(getByText(/11 May, 2019/)).toBeDefined();
    expect(getByText(/02 May, 2019/)).toBeDefined();
  });

  it('should show post tags', () => {
    const { getByText } = render(<PostListing {...makeProps()} />);
    expect(getByText('Gatsby JS X')).toBeDefined();
    expect(getByText('React X')).toBeDefined();
    expect(getByText('Angular X')).toBeDefined();
  });

  it('should have a heading', () => {
    const props = makeProps({ heading: 'Sample Posts' });
    const { getByText } = render(<PostListing {...props} />);
    expect(getByText('Sample Posts')).toBeDefined();
  });

  it('should have a generic heading if none provided', () => {
    const props = makeProps({ heading: '' });
    const { getByText } = render(<PostListing {...props} />);
    expect(getByText('Posts')).toBeDefined();
  });

  it('should show All Posts button if there is a single page', () => {
    const props = makeProps({ numOfPages: 1 });
    const { getByText } = render(<PostListing {...props} />);
    expect(getByText(/all posts/i)).toBeDefined();
  });

  it('should show pagination buttons if there are multiple pages', () => {
    const props = makeProps({ numOfPages: 2 });
    const { queryAllByText } = render(<PostListing {...props} />);
    expect(queryAllByText(/newer/i)).toHaveLength(1);
    expect(queryAllByText(/older/i)).toHaveLength(1);
  });

  it('should not show pagination buttons if there is a single page', () => {
    const props = makeProps({ numOfPages: 1 });
    const { queryAllByText } = render(<PostListing {...props} />);
    expect(queryAllByText(/newer/i)).toHaveLength(0);
    expect(queryAllByText(/older/i)).toHaveLength(0);
  });

  it('should show current page number', () => {
    const props = makeProps({ currentPage: 1423 });
    const { getByText } = render(<PostListing {...props} />);
    expect(getByText(/1423/)).toBeDefined();
  });

  it('should show number of pages', () => {
    const props = makeProps({ numOfPages: 12423 });
    const { getByText } = render(<PostListing {...props} />);
    expect(getByText(/12423/)).toBeDefined();
  });
});

