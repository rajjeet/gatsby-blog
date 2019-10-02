/* eslint no-undef: 0 */
/* eslint @typescript-eslint/no-unused-vars: 0 */
import React from 'react';
import { mockGroups } from '../src/fixtures/tags';
import { siteMetadata } from '../gatsby-config';
import { mockGatsbyImageSharpFluid } from '../src/fixtures/gatsby-images';

const gatsby = jest.requireActual('gatsby');
module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) => React.createElement('a', {
      ...rest,
      href: to,
    }),
  ),
  StaticQuery: jest.fn().mockImplementation(() => ({
    file: mockGatsbyImageSharpFluid.file,
    categoryGrouping: mockGroups.categoryGrouping,
    site: {
      siteMetadata,
    },
  })),
  useStaticQuery: jest.fn().mockImplementation(() => ({
    file: mockGatsbyImageSharpFluid.file,
    categoryGrouping: mockGroups.categoryGrouping,
    site: {
      siteMetadata,
    },
  })),
};
