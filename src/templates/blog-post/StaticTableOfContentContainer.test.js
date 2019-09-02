import React from 'react';
import { cleanup, render } from '@testing-library/react';
import StaticTableOfContentContainer from './StaticTableOfContentContainer';

afterEach(cleanup);

describe('StaticTableOfContentsContainer', () => {
  it('should render', () => {
    const { asFragment } = render(<StaticTableOfContentContainer htmlContent={'<h1>test</h1>'} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the html markup', () => {
    const { getByText } = render(<StaticTableOfContentContainer
      htmlContent={'<h1>This blog</h1>'}
    />);
    expect(getByText('This blog')).toBeDefined();
  });

  it('should not display heading by default', () => {
    const { queryByText } = render(<StaticTableOfContentContainer
      htmlContent={'<h1>This blog</h1>'}
    />);
    expect(queryByText('Outline')).toBeNull();
  });

  it('should display heading when isHeading is set to true', () => {
    const { getByText } = render(<StaticTableOfContentContainer
      htmlContent={'<h1>This blog</h1>'}
      includeHeading
    />);
    expect(getByText('Outline')).toBeDefined();
  });
});
