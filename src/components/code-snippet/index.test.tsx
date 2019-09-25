import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CodeSnippet } from './index';
import { makeProps } from './mock';

afterEach(cleanup);

describe('<CategoryListing />', () => {
  it('should render', () => {
    const { asFragment } = render(<CodeSnippet {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have a Copy button', () => {
    const { getByText } = render(<CodeSnippet {...makeProps()} />);
    expect(getByText('Copy')).toBeDefined();
  });

  it('should display the filename', () => {
    const { getByText } = render(<CodeSnippet {...makeProps()} />);
    expect(getByText('index.js')).toBeDefined();
  });

  it('should display the code', () => {
    const { getByText } = render(<CodeSnippet {...makeProps()} />);
    expect(getByText(/mainReducer/)).toBeDefined();
  });
});
