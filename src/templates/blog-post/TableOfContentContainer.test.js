import React from 'react';
import { cleanup, render } from '@testing-library/react';
import TableOfContentContainer from './TableOfContentContainer';

afterEach(cleanup);

describe('BlogPost', () => {
  it('should render', () => {
    const { asFragment } = render(<TableOfContentContainer htmlContent={'<h1>test</h1>'} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have a heading', () => {
    const { getByText } = render(<TableOfContentContainer htmlContent={'<h1>test</h1>'} />);
    expect(getByText('Outline')).toBeDefined();
  });

  it('should display the html markup', () => {
    const { getByText } = render(<TableOfContentContainer htmlContent={'<h1>This blog</h1>'} />);
    expect(getByText('This blog')).toBeDefined();
  });
});
