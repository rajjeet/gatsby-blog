import React from 'react';
import { render } from '@testing-library/react';
import { ProjectListing } from './index';
import { makeProps } from './mock';

describe('<ProjectListing />', () => {
  it('should render', () => {
    const { asFragment } = render(<ProjectListing {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have a heading', () => {
    const { getByText } = render(<ProjectListing {...makeProps()} />);
    expect(getByText('List of Projects')).toBeDefined();
  });

  it('should display the list of projects', () => {
    const { getByText } = render(<ProjectListing {...makeProps()} />);
    expect(getByText('Condo Landing Pages')).toBeDefined();
    expect(getByText('Kitchen Quoter')).toBeDefined();
  });
});
