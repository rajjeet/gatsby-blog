import React from 'react';
import { render } from '@testing-library/react';
import { CodeSnippet } from './index';
import { makeProps } from './mock';

describe('<CodeSnippet />', () => {
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

  // TODO: right a valid test
  // it('should display Copied after clicking on the copy button', () => {
  //   const { getByText, debug } = render(<CodeSnippet {...makeProps()} />);
  //   fireEvent.click(getByText('Copy'));
  //
  //   // expect(getByText('Copied')).toBeDefined();
  // });
});
