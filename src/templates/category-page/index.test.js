import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { StaticQuery } from 'gatsby';
import CategoryPage from './index';
import { createMockGatsbyImageSharpFluid, createMockGroups } from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';
import { makeProps } from './mock';

afterEach(cleanup);

beforeEach(() => {
  StaticQuery.mockImplementation(({ render: renderQuery }) => renderQuery(
    {
      file: createMockGatsbyImageSharpFluid.file,
      site: siteMetadata,
      categoryGrouping: createMockGroups.categoryGrouping,
    },
  ));
});

describe('CategoryPage', () => {
  it('should render', () => {
    const { asFragment } = render(<CategoryPage {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have the layout header', () => {
    const { getByText } = render(<CategoryPage {...makeProps()} />);
    expect(getByText('Ortmesh')).toBeDefined();
  });

  it('should have the category as the post listing heading', () => {
    const { getByText } = render(<CategoryPage {...makeProps()} />);
    expect(getByText('Self Improvement')).toBeDefined();
  });

  it('should contain the blog posts', () => {
    const { getByText } = render(<CategoryPage {...makeProps()} />);
    expect(getByText('Adding a Project Section to My Website')).toBeDefined();
    expect(getByText('State Management using React Hooks')).toBeDefined();
  });
});
