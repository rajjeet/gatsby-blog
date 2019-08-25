import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import AuthorCard from './index';
import { createMockGatsbyImageSharpFluid } from '../../utils/testing';
import { makeProps } from './mock';

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) => render({
    file: createMockGatsbyImageSharpFluid.file,
  }));
});

describe('<AuthorCard />', () => {
  it('should render', () => {
    const tree = renderer.create(<AuthorCard {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
