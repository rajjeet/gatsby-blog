import React from 'react';
import renderer from 'react-test-renderer';
import Project from './index';
import { makeProps } from './mock';

describe('<Project />', () => {
  it('should render', () => {
    const tree = renderer.create(<Project {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
