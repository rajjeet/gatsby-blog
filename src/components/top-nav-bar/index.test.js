import React from 'react';
import renderer from 'react-test-renderer';
import TopNavBar from './index';

const makeProps = () => ({
  className: {},
  data: {},
});

describe('<TopNavBar />', () => {
  it.skip('should render', () => {
    const tree = renderer.create(<TopNavBar {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
