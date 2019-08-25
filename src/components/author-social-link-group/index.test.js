import React from 'react';
import renderer from 'react-test-renderer';
import AuthorSocialLinkGroup from './index';
import { makeProps } from './mock';

describe('<AuthorSocialLinkGroup />', () => {
  it('should render', () => {
    const tree = renderer.create(<AuthorSocialLinkGroup {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
