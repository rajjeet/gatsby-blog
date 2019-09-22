import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { WebsiteIdentity } from './index';
import { makeProps } from './mock';

afterEach(cleanup);

describe('<WebsiteIdentity />', () => {
  it('should render', () => {
    const { asFragment } = render(<WebsiteIdentity {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have Ortmesh title', () => {
    const { getByText } = render(<WebsiteIdentity {...makeProps()} />);
    expect(getByText('Ortmesh')).toBeDefined();
  });

  it('should have an image with website logo', () => {
    const { getByAltText } = render(<WebsiteIdentity {...makeProps()} />);
    expect(getByAltText(/ortmesh/i)).toBeDefined();
  });

  it('should have the website caption', () => {
    const { getByText } = render(<WebsiteIdentity {...makeProps()} />);
    expect(getByText('Write code that matters')).toBeDefined();
  });
});
