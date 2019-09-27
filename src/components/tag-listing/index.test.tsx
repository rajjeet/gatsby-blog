import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { TagListing } from './index';

beforeEach(cleanup);

describe('<TagListing />', () => {
  it('should render', () => {
    const { asFragment } = render(<TagListing />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have a heading', () => {
    const { getByText } = render(<TagListing />);
    expect(getByText('Tags')).toBeDefined();
  });

  it('should the name of each tag group', () => {
    const { getByText } = render(<TagListing />);
    expect(getByText('Experience')).toBeDefined();
    expect(getByText('Guide')).toBeDefined();
  });
});
