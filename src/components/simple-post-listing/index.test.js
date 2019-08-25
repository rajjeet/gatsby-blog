import React from 'react';
import renderer from 'react-test-renderer';
import SimplePostListing from './index';
import { makeProps } from './mock';

describe('<SimplePostListing />', () => {
  it('should render', () => {
    const tree = renderer.create(<SimplePostListing {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
