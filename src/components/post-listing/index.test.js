import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { StaticQuery } from 'gatsby';
import ProjectListing from './index';
import { createMockGatsbyImageSharpFluid, createMockGroups } from '../../utils/testing';
import { makeProps } from './mock';

afterEach(cleanup);

beforeEach(() => {
  StaticQuery.mockImplementation(({ render: renderQuery }) => renderQuery(
    {
      categoryGrouping: createMockGroups.categoryGrouping,
      file: createMockGatsbyImageSharpFluid.file,
    },
  ));
});

describe('<PaginationButtonGroup />', () => {
  it('should render', () => {
    const { asFragment } = render(<ProjectListing {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show Categories', () => {
    const { getByText } = render(<ProjectListing {...makeProps()} />);
    expect(getByText('Categories')).toBeDefined();
  });

  it('should show Tags', () => {
    const { getByText } = render(<ProjectListing {...makeProps()} />);
    expect(getByText('Tags')).toBeDefined();
  });

  it('should show Author name', () => {
    const { getByText } = render(<ProjectListing {...makeProps()} />);
    expect(getByText('Rajjeet Phull')).toBeDefined();
  });

  it('should show Social Links', () => {
    const { getByText } = render(<ProjectListing {...makeProps()} />);
    expect(getByText('Links')).toBeDefined();
  });

  it('should show the post titles', () => {
    const { getByText } = render(<ProjectListing {...makeProps()} />);
    expect(getByText('Adding a Project Section to My Website')).toBeDefined();
    expect(getByText('State Management using React Hooks')).toBeDefined();
  });

  it('should show the post descriptions', () => {
    const { getByText } = render(<ProjectListing {...makeProps()} />);
    expect(getByText(/I was learning about the new React Hooks/)).toBeDefined();
    expect(getByText(/Over the past year, I truly learned/)).toBeDefined();
  });

  it('should show the time to read metric of each post', () => {
    const { getByText } = render(<ProjectListing {...makeProps()} />);
    expect(getByText(/2 min read/)).toBeDefined();
    expect(getByText(/4 min read/)).toBeDefined();
  });

  it('should show the post date', () => {
    const { getByText } = render(<ProjectListing {...makeProps()} />);
    expect(getByText(/11 May, 2019/)).toBeDefined();
    expect(getByText(/02 May, 2019/)).toBeDefined();
  });

  it('should show post tags', () => {
    const { getByText } = render(<ProjectListing {...makeProps()} />);
    expect(getByText('Gatsby JS X')).toBeDefined();
    expect(getByText('React X')).toBeDefined();
    expect(getByText('Angular X')).toBeDefined();
  });

  it('should show post categories', () => {
    const { getByText } = render(<ProjectListing {...makeProps()} />);
    expect(getByText('Side Project X')).toBeDefined();
    expect(getByText('Guide X')).toBeDefined();
  });

  it('should show linked images of blog posts', () => {
    const { getByAltText } = render(<ProjectListing {...makeProps()} />);
    expect(getByAltText('Adding a Project Section to My Website')).toBeDefined();
    expect(getByAltText('State Management using React Hooks')).toBeDefined();
  });

  it('should have a heading', () => {
    const props = makeProps({ heading: 'Sample Posts' });
    const { getByText } = render(<ProjectListing {...props} />);
    expect(getByText('Sample Posts')).toBeDefined();
  });

  it('should have a generic heading if none provided', () => {
    const props = makeProps({ heading: '' });
    const { getByText } = render(<ProjectListing {...props} />);
    expect(getByText('Posts')).toBeDefined();
  });

  it('should show All Posts button if there is a single page', () => {
    const props = makeProps({ numOfPages: 1 });
    const { getByText } = render(<ProjectListing {...props} />);
    expect(getByText(/all posts/i)).toBeDefined();
  });

  it('should show two set of pagination buttons if there are multiple pages', () => {
    const props = makeProps({ numOfPages: 2 });
    const { queryAllByText } = render(<ProjectListing {...props} />);
    expect(queryAllByText(/newer/i)).toHaveLength(2);
    expect(queryAllByText(/older/i)).toHaveLength(2);
  });

  it('should not show pagination buttons if there is a single page', () => {
    const props = makeProps({ numOfPages: 1 });
    const { queryAllByText } = render(<ProjectListing {...props} />);
    expect(queryAllByText(/newer/i)).toHaveLength(0);
    expect(queryAllByText(/older/i)).toHaveLength(0);
  });

  it('should show current page number', () => {
    const props = makeProps({ currentPage: 1423 });
    const { getByText } = render(<ProjectListing {...props} />);
    expect(getByText(/1423/)).toBeDefined();
  });

  it('should show number of pages', () => {
    const props = makeProps({ numOfPages: 12423 });
    const { getByText } = render(<ProjectListing {...props} />);
    expect(getByText(/12423/)).toBeDefined();
  });
});

