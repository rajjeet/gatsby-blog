import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { StaticQuery } from 'gatsby';
import TagListing from './index';
import { createMockGroups } from '../../utils/testing';
import { makeProps } from './mock';

beforeEach(cleanup);

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render: renderQuery }) => renderQuery(
    createMockGroups,
  ));
});

describe('<TagListing />', () => {
  it('should render', () => {
    const { asFragment } = render(<TagListing {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have a heading', () => {
    const { getByText } = render(<TagListing {...makeProps()} />);
    expect(getByText('Tags')).toBeDefined();
  });

  it('should the name of each tag group', () => {
    const { getByText } = render(<TagListing {...makeProps()} />);
    expect(getByText('Experience')).toBeDefined();
    expect(getByText('Guide')).toBeDefined();
  });
});
