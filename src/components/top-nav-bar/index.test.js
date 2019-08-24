import React from 'react';
import renderer from 'react-test-renderer';
import TopNavBar from './index';
import { createMockGatsbyImageSharpFluid } from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';

const makeProps = () => ({
  className: {},
  data: {
    file: createMockGatsbyImageSharpFluid.file,
    site: siteMetadata,
  },
});

describe('<TopNavBar />', () => {
  it('should render', () => {
    const tree = renderer.create(<TopNavBar {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
