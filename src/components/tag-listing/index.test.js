import React from 'react';
import renderer from 'react-test-renderer';
import TagListing from './index';

const makeProps = () => ({
  className: {},
});

describe('<TagListing />', () => {
  it.skip('should render', () => {
    renderer.create(<TagListing {...makeProps()} />);
  });
});
