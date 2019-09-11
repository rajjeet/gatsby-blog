import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AuthorSocialLinkGroup from './index';
import { makeProps } from './mock';

afterEach(cleanup);

describe('<AuthorSocialLinkGroup />', () => {
  it('should render', () => {
    const { asFragment } = render(<AuthorSocialLinkGroup {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have heading called Links', () => {
    const { getByText } = render(<AuthorSocialLinkGroup {...makeProps()} />);
    expect(getByText('Links')).toBeDefined();
  });

  it('should have 5 links', () => {
    const { queryAllByRole } = render(<AuthorSocialLinkGroup {...makeProps()} />);
    expect(queryAllByRole('link')).toHaveLength(5);
  });

  it('should have 5 images', () => {
    const { queryAllByRole } = render(<AuthorSocialLinkGroup {...makeProps()} />);
    expect(queryAllByRole('img')).toHaveLength(5);
  });

  it('should have a link to Github', () => {
    const { getByLabelText } = render(<AuthorSocialLinkGroup {...makeProps()} />);
    expect(getByLabelText(/github/i)).toBeDefined();
  });

  it('should have a link to Facebook', () => {
    const { getByLabelText } = render(<AuthorSocialLinkGroup {...makeProps()} />);
    expect(getByLabelText(/facebook/i)).toBeDefined();
  });

  it('should have a link to LinkedIn', () => {
    const { getByLabelText } = render(<AuthorSocialLinkGroup {...makeProps()} />);
    expect(getByLabelText(/linkedin/i)).toBeDefined();
  });

  it('should have a link to Twitter', () => {
    const { getByLabelText } = render(<AuthorSocialLinkGroup {...makeProps()} />);
    expect(getByLabelText(/twitter/i)).toBeDefined();
  });

  it('should have a link to email', () => {
    const { getByLabelText } = render(<AuthorSocialLinkGroup {...makeProps()} />);
    expect(getByLabelText(/email/i)).toBeDefined();
  });
});
