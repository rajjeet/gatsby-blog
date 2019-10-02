import React from 'react';
import { render } from '@testing-library/react';
import { MarkdownMdxProvider } from './markdown-mdx-provider';
import { mdxBody } from '../fixtures/mdx';

describe('MarkdownMdxProvider', () => {
  const component = <MarkdownMdxProvider content={mdxBody} />;
  it('should render', () => {
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });
});

