import React from 'react';
import renderer from 'react-test-renderer';
import {
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import SocialLink from './index';

const makeProps = () => ({
  className: '', link: '', icon: faFacebook,
});

describe('<SocialLink />', () => {
  it('should render', () => {
    const tree = renderer.create(<SocialLink {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
