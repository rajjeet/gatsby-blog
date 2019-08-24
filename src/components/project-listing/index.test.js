import React from 'react';
import renderer from 'react-test-renderer';
import ProjectListing from './index';

const makeProps = () => ({
  className: {}, projects: [], heading: '',
});

describe('<ProjectListing />', () => {
  it.skip('should render', () => {
    const tree = renderer.create(<ProjectListing {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
