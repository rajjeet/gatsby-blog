import React, { useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { AutoLinkHeader } from '../components/auto-link-header';

type TProps = {
  content: React.ReactNode;
}

const Wrapper = styled.div`
  background-color: whitesmoke;
  padding: 1em;
  margin-bottom: 1em;
  border-radius: ${(props): string => props.theme.borderRadius};
  box-shadow: ${(props): string => props.theme.lightBoxShadow};  
`;

const FigCaption = styled.figcaption`
  font-style: italic;
  color: dimgrey;
  margin: .5em 0; 
  text-align: center;
  font-size: 1rem;
`;

const Paragraph = ({ children }): JSX.Element => <div>{children}</div>;

export const MarkdownMdxProvider: React.FC<TProps> = ({ content }) => {
  const [components] = useState(
    {
      ...['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce((a, v) => {
        a[v] = AutoLinkHeader(v); // eslint-disable-line no-param-reassign
        return a;
      }, {}),
      figcaption: FigCaption,
      wrapper: Wrapper,
      p: Paragraph,
    },
  );

  return (
    <MDXProvider components={components}>
      {content && <MDXRenderer>{content}</MDXRenderer>}
    </MDXProvider>
  );
};
