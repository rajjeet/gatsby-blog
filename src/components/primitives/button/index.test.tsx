import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './index';
import { makeProps } from './mock';

describe('<Button />', () => {
  it('should render', () => {
    const { asFragment } = render(<Button {...makeProps()}>Click Me</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
