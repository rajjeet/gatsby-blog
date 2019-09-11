import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SocialLink from './index';
import { makeProps } from './mock';

afterEach(cleanup);

describe('<SocialLink />', () => {
  it('should render', () => {
    const { asFragment } = render(<SocialLink {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have a link', () => {
    const { getByRole, getByLabelText } = render(<SocialLink {...makeProps()} />);
    expect(getByRole('link')).toBeDefined();
    expect(getByLabelText(/facebook/i)).toBeDefined();
  });

  it('should have an image', () => {
    const { getByRole } = render(<SocialLink {...makeProps()} />);
    expect(getByRole('img')).toBeDefined();
  });
});
