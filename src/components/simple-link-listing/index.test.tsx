import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SimpleLinkListing } from './index';
import { makeProps } from './mock';

afterEach(cleanup);

describe('<SimpleLinkListing />', () => {
  it('should render', () => {
    const { asFragment } = render(<SimpleLinkListing {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should has a heading', () => {
    const { getByText } = render(<SimpleLinkListing {...makeProps()} />);
    expect(getByText('Links')).toBeDefined();
  });

  it('should have a list of links', () => {
    const { getByLabelText } = render(<SimpleLinkListing {...makeProps()} />);
    expect(getByLabelText('ex. CharismaCondos.net')).toBeDefined();
    expect(getByLabelText('ex. SouthWoodbridge.com')).toBeDefined();
    expect(getByLabelText('Github Code')).toBeDefined();
  });

  it('should have 3 links', () => {
    const { queryAllByRole } = render(<SimpleLinkListing {...makeProps()} />);
    expect(queryAllByRole('link')).toHaveLength(3);
  });
});
