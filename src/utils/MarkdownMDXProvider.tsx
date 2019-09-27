import React, { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { AutoLinkHeader } from '../components/auto-link-header';

type TProps = {
  content: React.ReactNode;
}

export const MarkdownMdxProvider: React.FC<TProps> = ({ content }) => {
  const [components] = useState(
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce((a, v) => {
      a[v] = AutoLinkHeader(v); // eslint-disable-line no-param-reassign
      return a;
    }, {}),
  );

  return (
    <MDXProvider components={components}>
      {content && <MDXRenderer>{content}</MDXRenderer>}
    </MDXProvider>
  );
};
