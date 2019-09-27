import * as React from 'react';
import { render } from '@testing-library/react';
import { Headshot } from './index';

describe('Headshot', () => {
  it('should render', () => {
    const { asFragment } = render(<Headshot />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should show the headshot of site author', () => {
    const { getByAltText } = render(<Headshot />);
    expect(getByAltText('Headshot of site author')).toBeDefined();
  });
});
