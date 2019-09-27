import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CategoryListing } from './index';
import { createMockGroups } from '../../utils/testing';
import { makeProps } from './mock';

afterEach(cleanup);

describe('<CategoryListing />', () => {
  it('should render', () => {
    const { asFragment } = render(<CategoryListing {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have a heading labelled Categories', () => {
    const { getByText } = render(<CategoryListing {...makeProps()} />);
    expect(getByText('Categories')).toBeDefined();
  });

  it('should have two categories with the role of link', () => {
    const { queryAllByRole } = render(<CategoryListing {...makeProps()} />);
    expect(queryAllByRole('link')).toHaveLength(2);
  });

  it('should show categories by name and count', () => {
    const { getByText } = render(<CategoryListing {...makeProps()} />);
    const groups = createMockGroups.categoryGrouping.group;
    groups.forEach((group) => {
      expect(getByText(group.fieldValue)).toBeDefined();
      expect(getByText(group.totalCount.toString())).toBeDefined();
    });
  });
});
