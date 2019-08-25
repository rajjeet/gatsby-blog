import React from 'react';
import renderer from 'react-test-renderer';
import PaginationButtonGroup from './index';
import { makeProps } from './mock';

describe('<PaginationButtonGroup />', () => {
  it('should render', () => {
    const tree = renderer.create(<PaginationButtonGroup {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
