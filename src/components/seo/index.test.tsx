import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Seo from './index';
import { makeProps } from './mock';

afterEach(cleanup);

describe('<Seo />', () => {
  it('should render', () => {
    const { asFragment } = render(<Seo {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
