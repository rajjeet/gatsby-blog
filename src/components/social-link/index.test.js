import React from 'react';
import renderer from 'react-test-renderer';
import SocialLink from './index';
import { makeProps } from './mock';

describe('<SocialLink />', () => {
  it('should render', () => {
    const tree = renderer.create(<SocialLink {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
