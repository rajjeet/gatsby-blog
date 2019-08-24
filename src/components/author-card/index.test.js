import React from 'react';
import renderer from 'react-test-renderer';
import AuthorCard from './index';

const makeProps = () => ({
  className: {},
});

describe('<AuthorCard />', () => {
  it.skip('should render', () => {
    const tree = renderer.create(<AuthorCard {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
