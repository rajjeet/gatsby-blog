import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NotFoundPage from '../404';

afterEach(cleanup);

describe('404 Page', () => {
  it('should render', () => {
    const { asFragment } = render(<NotFoundPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
