import React from 'react';
import renderer from 'react-test-renderer';
import ProjectListing from './index';
import { makeProps } from './mock';

describe('<ProjectListing />', () => {
  it('should render', () => {
    const tree = renderer.create(<ProjectListing {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
