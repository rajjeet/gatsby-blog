import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import CategoryListing from './index';
import { createMockGroups } from '../../utils/testing';

const makeProps = () => ({
  className: {},
});

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) => render(
    createMockGroups,
  ));
});

describe('<CategoryListing />', () => {
  it('should render', () => {
    const tree = renderer.create(<CategoryListing {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
