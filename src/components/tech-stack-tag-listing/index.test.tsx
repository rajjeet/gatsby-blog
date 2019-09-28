import React from 'react';
import { render } from '@testing-library/react';
import { TechStackTagListing } from './index';
import { makeProps } from './mock';

describe('<TechStackTagListing />', () => {
  it('should render', () => {
    const { asFragment } = render(<TechStackTagListing {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have "Tech Tags" label', () => {
    const { getByText } = render(<TechStackTagListing {...makeProps()} />);
    expect(getByText('Tech Tags:')).toBeDefined();
  });

  it('should have text for each tech', () => {
    const { getByText } = render(<TechStackTagListing {...makeProps()} />);
    expect(getByText('React')).toBeDefined();
    expect(getByText('GatsbyJS')).toBeDefined();
  });
});

