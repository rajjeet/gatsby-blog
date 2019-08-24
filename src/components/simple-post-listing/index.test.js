import React from 'react';
import renderer from 'react-test-renderer';
import SimplePostListing from './index';
import { createMockPosts } from '../../utils/testing';

const makeProps = () => ({
  posts: createMockPosts,
});

describe('<SimplePostListing />', () => {
  it('should render', () => {
    const tree = renderer.create(<SimplePostListing {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
