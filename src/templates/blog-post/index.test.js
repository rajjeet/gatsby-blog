import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { StaticQuery } from 'gatsby';
import BlogPost from './index';
import { createMockGatsbyImageSharpFluid } from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';
import { makeProps } from './mock';

afterEach(cleanup);

beforeEach(() => {
  StaticQuery.mockImplementation(({ render: renderQuery }) => renderQuery(
    {
      file: createMockGatsbyImageSharpFluid.file,
      site: siteMetadata,
    },
  ));
});

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

  it('should shows the blog tag', () => {
    const { getByText } = render(<BlogPost {...makeProps()} />);
    expect(getByText('React X')).toBeDefined();
    expect(getByText('Angular X')).toBeDefined();
  });

  it('should shows the blog html', () => {
    const { getByText } = render(<BlogPost {...makeProps()} />);
    expect(getByText('This is blog content 102')).toBeDefined();
  });
});
