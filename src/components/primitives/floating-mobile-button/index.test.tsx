import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { RoundIconButton } from './index';
import { makeProps } from './mock';

afterEach(cleanup);

describe('<RoundIconButton />', () => {
  it('should render', () => {
    const { asFragment } = render(
      <RoundIconButton {...makeProps()} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
