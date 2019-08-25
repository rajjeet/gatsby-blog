import React from 'react';
import renderer from 'react-test-renderer';
import TechStackTagListing from './index';
import { makeProps } from './mock';

describe('<TechStackTagListing />', () => {
  it('should render', () => {
    const tree = renderer.create(<TechStackTagListing {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
