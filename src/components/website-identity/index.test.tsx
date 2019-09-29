import React from 'react';
import { render } from '@testing-library/react';
import { WebsiteIdentity } from './index';

describe('<WebsiteIdentity />', () => {
  it('should render', () => {
    const { asFragment } = render(<WebsiteIdentity />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have Ortmesh title', () => {
    const { getByText } = render(<WebsiteIdentity />);
    expect(getByText('Ortmesh')).toBeDefined();
  });

  it('should have an image with website logo', () => {
    const { getByAltText } = render(<WebsiteIdentity />);
    expect(getByAltText(/ortmesh/i)).toBeDefined();
  });

  it('should have the website caption', () => {
    const { getByText } = render(<WebsiteIdentity />);
    expect(getByText('Write code that matters')).toBeDefined();
  });
});
