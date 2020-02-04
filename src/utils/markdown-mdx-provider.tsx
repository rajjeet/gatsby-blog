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
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: ${(props): string => props.theme.borderRadius};
  box-shadow: ${(props): string => props.theme.lightBoxShadow};  
`;

const FigCaption = styled.figcaption`
  font-style: italic;
  color: dimgrey;
  margin: .5rem 0; 
  text-align: center;
  font-size: 1rem;
`;

const Paragraph = styled.div`
  margin-bottom: 1rem;
`;

const Anchor = ({ children, href, className }): JSX.Element => (
  <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

const StyledAnchor = styled(Anchor)`
  color: ${(props): string => props.theme.primaryColor};
  text-decoration: none;
  &:hover, &:active {
    color: ${(props): string => props.theme.secondaryColor};
  }
`;

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
      a: StyledAnchor,
    },
  );

  return (
    <MDXProvider components={components}>
      {content && <MDXRenderer>{content}</MDXRenderer>}
    </MDXProvider>
  );
};
