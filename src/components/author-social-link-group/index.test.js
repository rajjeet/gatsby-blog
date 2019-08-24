import React from 'react';
import renderer from 'react-test-renderer';
import AuthorSocialLinkGroup from './index';

describe('<AuthorSocialLinkGroup />', () => {
  it('should render', () => {
    const tree = renderer.create(<AuthorSocialLinkGroup />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
