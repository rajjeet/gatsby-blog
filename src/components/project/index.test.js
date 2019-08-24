import React from 'react';
import renderer from 'react-test-renderer';
import Project from './index';

const makeProps = () => ({
  heading: 'Sample Heading', link: '', description: '', className: {}, thumbnail: null,
});

describe('<Project />', () => {
  it.skip('should render', () => {
    const tree = renderer.create(<Project {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
