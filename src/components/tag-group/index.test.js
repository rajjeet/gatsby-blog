import React from 'react';
import renderer from 'react-test-renderer';
import TagGroup from './index';
import { createMockGroups } from '../../utils/testing';

const makeProps = () => ({
  className: {}, tags: createMockGroups.categoryGrouping.group, getSlug: jest.fn(),
});

describe('<TagGroup />', () => {
  it('should render', () => {
    renderer.create(<TagGroup {...makeProps()} />);
  });
});
