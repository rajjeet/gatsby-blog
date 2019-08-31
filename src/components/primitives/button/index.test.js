import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from './index';
import { makeProps } from './mock';

afterEach(cleanup);

describe('<Button />', () => {
  it('should render', () => {
    const { asFragment } = render(<Button {...makeProps()}>Click Me</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
