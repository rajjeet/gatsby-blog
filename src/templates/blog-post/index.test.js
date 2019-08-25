import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import BlogPost from './index';
import {
  createMockGatsbyImageSharpFluid,
  createMockPosts,
} from '../../utils/testing';
import siteMetadata from '../../../gatsby-config';

const makeProps = () => ({
  className: {},
  data: {
    post: createMockPosts[0].node,
  },
});

beforeEach(() => {
  StaticQuery.mockImplementation(({ render }) => render(
    {
      file: createMockGatsbyImageSharpFluid.file,
      site: siteMetadata,
    },
  ));
});

describe('BlogPost', () => {
  it('should render', () => {
    const tree = renderer.create(<BlogPost {...makeProps()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
