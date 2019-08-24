import React from 'react';
import renderer from 'react-test-renderer';
import TagGroup from './index';

const makeProps = () => ({
  className: {}, tags: [], getSlug: jest.fn(),
});

describe('<TagGroup />', () => {
  it('should render', () => {
    renderer.create(<TagGroup {...makeProps()} />);
  });
});
