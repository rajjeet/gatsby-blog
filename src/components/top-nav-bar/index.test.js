import React from 'react';
import renderer from 'react-test-renderer';
import TopNavBar from './index';
import { makeProps } from './mock';

describe('<TopNavBar />', () => {
  it('should render', () => {
    const tree = renderer.create(<TopNavBar {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
