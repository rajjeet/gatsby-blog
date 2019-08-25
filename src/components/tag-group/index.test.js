import React from 'react';
import renderer from 'react-test-renderer';
import TagGroup from './index';
import { makeProps } from './mock';

describe('<TagGroup />', () => {
  it('should render', () => {
    renderer.create(<TagGroup {...makeProps()} />);
  });
});
