import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TopNavBar from './index';
import { makeProps } from './mock';

afterEach(cleanup);

describe('<TopNavBar />', () => {
  it('should render', () => {
    const { asFragment } = render(<TopNavBar {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have Ortmesh title', () => {
    const { getByText } = render(<TopNavBar {...makeProps()} />);
    expect(getByText('Ortmesh')).toBeDefined();
  });

  it('should have an image with website logo', () => {
    const { getByAltText } = render(<TopNavBar {...makeProps()} />);
    expect(getByAltText(/ortmesh/i)).toBeDefined();
  });

  it('should have the website caption', () => {
    const { getByText } = render(<TopNavBar {...makeProps()} />);
    expect(getByText('Write code that matters')).toBeDefined();
  });

  it('should have an About button', () => {
    const { getByText, getByRole } = render(<TopNavBar {...makeProps()} />);
    expect(getByText('About')).toBeDefined();
    expect(getByRole('button')).toBeDefined();
  });
});
