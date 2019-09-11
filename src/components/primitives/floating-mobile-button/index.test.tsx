import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FloatingMobileButton from './index';
import { makeProps } from './mock';

afterEach(cleanup);

describe('<FloatingMobileButton />', () => {
  it('should render', () => {
    const { asFragment } = render(
      <FloatingMobileButton {...makeProps()} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
