import React from 'react';
import { cleanup, render } from '@testing-library/react';
import TagPage from './index';
import { makeProps } from './mock';

afterEach(cleanup);

describe('TagPage', () => {
  it('should render', () => {
    const { asFragment } = render(<TagPage {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have the layout header', () => {
    const { getByText } = render(<TagPage {...makeProps()} />);
    expect(getByText('Ortmesh')).toBeDefined();
  });

  it('should have the category as the post listing heading', () => {
    const { getByText } = render(<TagPage {...makeProps()} />);
    expect(getByText('Life Skills')).toBeDefined();
  });

  it('should contain the blog posts', () => {
    const { getByText } = render(<TagPage {...makeProps()} />);
    expect(getByText('Adding a Project Section to My Website')).toBeDefined();
    expect(getByText('State Management using React Hooks')).toBeDefined();
  });
});
