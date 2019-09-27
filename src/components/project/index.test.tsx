import React from 'react';
import { render } from '@testing-library/react';
import { Project } from './index';
import { makeProps } from './mock';

describe('<Project />', () => {
  it('should render', () => {
    const { asFragment } = render(<Project {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have a link', () => {
    const { getByLabelText, getByRole } = render(<Project {...makeProps()} />);
    expect(getByLabelText('See Sample Project')).toBeDefined();
    expect(getByRole('link')).toBeDefined();
  });

  it('should have a heading', () => {
    const { getByText } = render(<Project {...makeProps()} />);
    expect(getByText('Sample Project')).toBeDefined();
  });

  it('should have a thumbnail image', () => {
    const { getByAltText } = render(<Project {...makeProps()} />);
    expect(getByAltText(/Sample Project/i)).toBeDefined();
  });

  it('should have a description', () => {
    const { getByText } = render(<Project {...makeProps()} />);
    expect(getByText('This is a sample project description')).toBeDefined();
  });
});
