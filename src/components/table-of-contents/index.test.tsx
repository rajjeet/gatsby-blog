import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TableOfContents from './index';
import { makeProps } from './mock';

afterEach(cleanup);

describe('<TableOfContents />', () => {
  it('should render', () => {
    const { asFragment } = render(<TableOfContents {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show each link', () => {
    const { getByText } = render(<TableOfContents {...makeProps()} />);
    expect(getByText('Introduction')).toBeDefined();
    expect(getByText('The Basics')).toBeDefined();
    expect(getByText('State Management (Redux)')).toBeDefined();
    expect(getByText('Context API')).toBeDefined();
    expect(getByText('Manage Global State in React Hooks')).toBeDefined();
    expect(getByText('Middleware: Logger')).toBeDefined();
  });

  it('should show only one heading', () => {
    const { getByText } = render(<TableOfContents {...makeProps()} />);
    expect(getByText('Outline')).toBeDefined();
  });
});
