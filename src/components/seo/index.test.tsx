import React from 'react';
import { render } from '@testing-library/react';
import { Seo } from './index';
import { makeProps } from './mock';

describe('<Seo />', () => {
  it('should render', () => {
    const { asFragment } = render(<Seo {...makeProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
