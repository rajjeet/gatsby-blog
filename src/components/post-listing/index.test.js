import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import ProjectListing from './index';
import { createMockGatsbyImageSharpFluid, createMockGroups } from '../../utils/testing';
import { makeProps } from './mock';

beforeEach(() => {
  StaticQuery.mockImplementation(({ render }) => render(
    {
      categoryGrouping: createMockGroups.categoryGrouping,
      file: createMockGatsbyImageSharpFluid.file,
    },
  ));
});

describe('<PaginationButtonGroup />', () => {
  it('should render', () => {
    const tree = renderer.create(<ProjectListing {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
