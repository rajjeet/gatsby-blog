import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import Prism from 'prismjs';
import { CodeSnippet } from './index';
import { makeProps } from './mock';

const Container = ({ children }): JSX.Element => {
  useEffect(() => Prism.highlightAll(), []);
  return <div>{children}</div>;
};

storiesOf('Code Snippet', module)
  .add('default', () => (
    <Container>
      <CodeSnippet {...makeProps()} />
    </Container>
  ))
  .add('line numbers and highlight', () => (
    <Container>
      <CodeSnippet dataLine="2-4" {...makeProps()} />
    </Container>
  ));
