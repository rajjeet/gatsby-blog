import React from 'react';
import { render } from '@testing-library/react';
import { SimplePostListing } from './index';
import { makeProps } from './mock';

describe('<SimplePostListing />', () => {
  it('should render', () => {
    const { asFragment } = render(<SimplePostListing {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have a heading', () => {
    const { getByText } = render(<SimplePostListing {...makeProps()} />);
    expect(getByText('Blog Posts')).toBeDefined();
  });

  it('should a link for each listed post', () => {
    const { getByLabelText, queryAllByRole } = render(<SimplePostListing {...makeProps()} />);
    expect(queryAllByRole('link')).toHaveLength(makeProps().posts.length);
    expect(getByLabelText('See post: Adding a Project Section to My Website')).toBeDefined();
    expect(getByLabelText('See post: State Management using React Hooks')).toBeDefined();
  });

  it('should "time to read" metrics for each post', () => {
    const { getByText } = render(<SimplePostListing {...makeProps()} />);
    expect(getByText('2 mins read')).toBeDefined();
    expect(getByText('4 mins read')).toBeDefined();
  });

  it('should have the post tiles for each post', () => {
    const { getByText } = render(<SimplePostListing {...makeProps()} />);
    expect(getByText('Adding a Project Section to My Website')).toBeDefined();
    expect(getByText('State Management using React Hooks')).toBeDefined();
  });

  it('should have the post dates', () => {
    const { getByText } = render(<SimplePostListing {...makeProps()} />);
    expect(getByText('11 May, 2019')).toBeDefined();
    expect(getByText('02 May, 2019')).toBeDefined();
  });
});
