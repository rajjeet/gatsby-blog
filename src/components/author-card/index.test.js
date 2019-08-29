import React from 'react';
import { StaticQuery } from 'gatsby';
import { render, cleanup } from '@testing-library/react';
import AuthorCard from './index';
import { createMockGatsbyImageSharpFluid } from '../../utils/testing';
import { makeProps } from './mock';

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render: renderQuery }) => renderQuery({
    file: createMockGatsbyImageSharpFluid.file,
  }));
});

afterEach(cleanup);

describe('<AuthorCard />', () => {
  it('should render', () => {
    const { asFragment } = render(<AuthorCard {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have an image of author headshot', () => {
    const { getByAltText } = render(<AuthorCard {...makeProps()} />);
    expect(getByAltText(/author.*headshot/i)).toBeDefined();
  });

  it('should have a heading for author name', () => {
    const { getByText } = render(<AuthorCard {...makeProps()} />);
    expect(getByText('Rajjeet Phull')).toBeDefined();
  });

  it('should have a description specifying occupation of author as software developer', () => {
    const { getByText } = render(<AuthorCard {...makeProps()} />);
    expect(getByText(/Software Developer/)).toBeDefined();
  });
});

