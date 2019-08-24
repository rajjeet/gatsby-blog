import React from 'react';
import renderer from 'react-test-renderer';
import Project from './index';
import { createMockGatsbyImageSharpFluid } from '../../utils/testing';

const makeProps = () => ({
  heading: 'Sample Heading',
  link: '',
  description: '',
  className: {},
  thumbnail: createMockGatsbyImageSharpFluid.file.childImageSharp.fluid,
});

describe('<Project />', () => {
  it('should render', () => {
    const tree = renderer.create(<Project {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
