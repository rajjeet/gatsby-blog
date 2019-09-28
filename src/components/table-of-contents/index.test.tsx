import React from 'react';
import {
  render, RenderResult,
} from '@testing-library/react';
import { TableOfContents } from './index';
import { makeProps } from './mock';

function renderTableOfContents(): RenderResult {
  return render(<TableOfContents {...makeProps()} />);
}

describe('<TableOfContents />', () => {
  it('should render', () => {
    const { asFragment } = renderTableOfContents();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show each link', () => {
    const { getByText } = renderTableOfContents();
    expect(getByText('Introduction')).toBeDefined();
    expect(getByText('The Basics')).toBeDefined();
    expect(getByText('State Management (Redux)')).toBeDefined();
    expect(getByText('Context API')).toBeDefined();
    expect(getByText('Manage Global State in React Hooks')).toBeDefined();
    expect(getByText('Middleware: Logger')).toBeDefined();
  });

  it('should show only one heading', () => {
    const { getByText } = renderTableOfContents();
    expect(getByText('Outline')).toBeDefined();
  });

  it('should show a "Back to Top" button', () => {
    const { getByText } = renderTableOfContents();
    expect(getByText('Top')).toBeDefined();
  });
});
