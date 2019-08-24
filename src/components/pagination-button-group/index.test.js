import React from 'react';
import renderer from 'react-test-renderer';
import PaginationButtonGroup from './index';

const makeProps = () => ({
  className: {}, currentPage: 1, numOfPages: 5, paginationSlug: '',
});

describe('<PaginationButtonGroup />', () => {
  it('should render', () => {
    const tree = renderer.create(<PaginationButtonGroup {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
