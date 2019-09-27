import React from 'react';
import { render } from '@testing-library/react';
import { RoundIconButton } from './index';
import { makeProps } from './mock';

describe('<RoundIconButton />', () => {
  it('should render', () => {
    const { asFragment } = render(
      <RoundIconButton {...makeProps()} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
