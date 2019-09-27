import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from './index';
import { makeProps } from './mock';

describe('<Layout />', () => {
  it('should render', () => {
    const { asFragment } = render(<Layout {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the pass in children', () => {
    const { getByText } = render(<Layout {...makeProps()} />);
    expect(getByText('Sample child')).toBeDefined();
  });

  it('should render an image for website logo', () => {
    const { getByAltText } = render(<Layout {...makeProps()} />);
    expect(getByAltText(/ortmesh.*logo/i)).toBeDefined();
  });

  it('should have a link with label home', () => {
    const { getByLabelText } = render(<Layout {...makeProps()} />);
    expect(getByLabelText(/home/i)).toBeDefined();
  });

  it('should have heading called Ortmesh', () => {
    const { getByText } = render(<Layout {...makeProps()} />);
    expect(getByText('Ortmesh')).toBeDefined();
  });

  it('should have a website caption', () => {
    const { getByText } = render(<Layout {...makeProps()} />);
    expect(getByText('Write code that matters')).toBeDefined();
  });
});

