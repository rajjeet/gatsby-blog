import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { CodeSnippet, getSyntaxClassname } from './index';
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

  it('should display Copied after clicking on the copy button', () => {
    const { getByText } = render(<CodeSnippet {...makeProps()} />);
    act(() => {
      fireEvent.click(getByText('Copy'));
    });
    expect(getByText('Copied')).toBeDefined();
  });

  it('should reset the text to Copy after clicking on the copy button and waiting for few seconds', () => {
    jest.useFakeTimers();
    const { getByText } = render(<CodeSnippet {...makeProps()} />);
    act(() => {
      fireEvent.click(getByText('Copy'));
      jest.runAllTimers();
    });
    expect(getByText('Copy')).toBeDefined();
  });

  it('should add line-numbers to code snippet dataLine is specified ', () => {
    const props = makeProps();
    props.dataLine = '1';
    const { container } = render(<CodeSnippet {...props} />);
    expect(container.querySelector('pre.line-numbers')).not.toBeNull();
  });

  it('should add line-numbers to code snippet hasLineNumbers is specified ', () => {
    const props = makeProps();
    props.hasLineNumbers = true;
    const { container } = render(<CodeSnippet {...props} />);
    expect(container.querySelector('pre.line-numbers')).not.toBeNull();
  });

  it('should have the code block set the className of the specified language', () => {
    const props = makeProps();
    props.language = 'html';
    const { container } = render(<CodeSnippet {...props} />);
    expect(container.querySelector('code.language-html')).not.toBeNull();
  });

  it('should convert pass in language to correct className', () => {
    expect(getSyntaxClassname('html')).toEqual('language-html');
  });
  it('should default to javascript if no language is provided', () => {
    expect(getSyntaxClassname('')).toEqual('language-javascript');
  });
});
