import React from 'react';
import renderer from 'react-test-renderer';
import SimpleLinkListing from './index';
import { makeProps } from './mock';

describe('<SimpleLinkListing />', () => {
  it('should render', () => {
    const tree = renderer.create(<SimpleLinkListing {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
