import React from 'react';
import renderer from 'react-test-renderer';
import SimpleLinkListing from './index';

const makeProps = () => ({
  links: [],
});

describe('<SimpleLinkListing />', () => {
  it.skip('should render', () => {
    const tree = renderer.create(<SimpleLinkListing {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
