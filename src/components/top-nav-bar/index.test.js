import React from 'react';
import renderer from 'react-test-renderer';
import TopNavBar from './index';
import { createMockGatsbyImageSharpFluid } from '../../utils/testing';

const makeProps = () => ({
  className: {},
  data: {
    file: createMockGatsbyImageSharpFluid.file,
    site: { siteMetadata: { title: 'Sample Title' } },
  },
});

describe('<TopNavBar />', () => {
  it('should render', () => {
    const tree = renderer.create(<TopNavBar {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
