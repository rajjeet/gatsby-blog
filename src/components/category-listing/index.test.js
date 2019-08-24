import React from 'react';
import renderer from 'react-test-renderer';
import CategoryListing from './index';

const makeProps = () => ({
  className: {},
});

describe('<CategoryListing />', () => {
  it.skip('should render', () => {
    const tree = renderer.create(<CategoryListing {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
