import React from 'react';
import renderer from 'react-test-renderer';
import PaginationButtonGroup from './index';

describe('<PaginationButtonGroup />', () => {
  it('should render', () => {
    const tree = renderer.create(<PaginationButtonGroup />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
