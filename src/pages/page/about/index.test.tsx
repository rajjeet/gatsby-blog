import React from 'react';
import { cleanup, render } from '@testing-library/react';
import AboutPage from './index';

afterEach(cleanup);

describe('About page', () => {
  it('should render', () => {
    const { asFragment } = render(<AboutPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have About Me heading', () => {
    const { getByText } = render(<AboutPage />);
    expect(getByText('About Me')).toBeDefined();
  });

  it('should have a heading for author name', () => {
    const { getByText } = render(<AboutPage />);
    expect(getByText('Rajjeet Phull')).toBeDefined();
  });
});