import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import TagListing from './index';
import { createMockGroups } from '../../utils/testing';

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) => render(
    createMockGroups,
  ));
});

const makeProps = () => ({
  className: {},
});

describe('<TagListing />', () => {
  it('should render', () => {
    renderer.create(<TagListing {...makeProps()} />);
  });
});
