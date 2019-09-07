import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AutoLinkHeader from './index';

afterEach(cleanup);

describe('<AuthorCard />', () => {
  const Component = AutoLinkHeader(1);
  it('should render', () => {
    const { asFragment } = render(<Component>Sample Heading</Component>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show the heading text', () => {
    const { getByText } = render(<Component>Sample Heading</Component>);
    expect(getByText('Sample Heading')).toBeDefined();
  });
});

