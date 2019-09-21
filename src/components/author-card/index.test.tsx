import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { AuthorCard } from './index';

afterEach(cleanup);

describe('<AuthorCard />', () => {
  it('should render', () => {
    const { asFragment } = render(<AuthorCard />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have an image of author headshot', () => {
    const { getByAltText } = render(<AuthorCard />);
    expect(getByAltText(/Headshot of site author/i)).toBeDefined();
  });

  it('should have a heading for author name', () => {
    const { getByText } = render(<AuthorCard />);
    expect(getByText('Rajjeet Phull')).toBeDefined();
  });

  it('should have a description specifying occupation of author as software developer', () => {
    const { getByText } = render(<AuthorCard />);
    expect(getByText(/Web Developer/i)).toBeDefined();
  });
});

