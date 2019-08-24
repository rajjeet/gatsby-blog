import React from 'react';
import renderer from 'react-test-renderer';
import TechStackTagListing from './index';

const makeProps = () => ({
  className: {},
  tags: [],
});

describe('<TechStackTagListing />', () => {
  it('should render', () => {
    const tree = renderer.create(<TechStackTagListing {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
