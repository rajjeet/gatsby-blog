import React from 'react';
import { cleanup, render } from '@testing-library/react';
import BlogPost from './index';
import { makeProps } from './mock';

afterEach(cleanup);

describe('BlogPost', () => {
  it('should render', () => {
    const { asFragment } = render(<BlogPost {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have a table of contents', () => {
    const { getByText } = render(<BlogPost {...makeProps()} />);
    expect(getByText('Outline')).toBeDefined();
  });

  it('should show the post title', () => {
    const { getByText } = render(<BlogPost {...makeProps()} />);
    expect(getByText('State Management using React Hooks')).toBeDefined();
  });

  it('should show the post date', () => {
    const { getByText } = render(<BlogPost {...makeProps()} />);
    expect(getByText(/02 May, 2019/)).toBeDefined();
  });

  it('should show the time to read', () => {
    const { getByText } = render(<BlogPost {...makeProps()} />);
    expect(getByText(/4 min read/)).toBeDefined();
  });

  it('should show comments', () => {
    const { getByText } = render(<BlogPost {...makeProps()} />);
    expect(getByText(/comments/i)).toBeDefined();
  });

  it('should show the description', () => {
    const { getByText } = render(<BlogPost {...makeProps()} />);
    expect(getByText(/I was learning about the new React Hooks/)).toBeDefined();
  });

  it('should show the blog category', () => {
    const { getByText } = render(<BlogPost {...makeProps()} />);
    expect(getByText('Guide X')).toBeDefined();
  });

  it('should shows the blog tag', () => {
    const { getByText } = render(<BlogPost {...makeProps()} />);
    expect(getByText('React X')).toBeDefined();
    expect(getByText('Angular X')).toBeDefined();
  });
});