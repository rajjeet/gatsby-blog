import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

const makeProps = () => ({});

describe('<Button />', () => {
  it('should render', () => {
    const tree = renderer.create(<Button {...makeProps()}>Click Me</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
