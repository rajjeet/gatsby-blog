import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import Prism from 'prismjs';
import CodeSnippet from './index';

const code = `
const mainReducer = (state, action) => {
  console.log('Before', state);
  console.log('Action', action);
  let result = {
    count: countReducer(state.count, action)      
  };
  console.log('After', result);
  return result
};      

`;

const Container = ({ children }) => {
  useEffect(() => Prism.highlightAll(), []);
  return <div>{children}</div>;
};

storiesOf('Code Snippet', module)
  .add('default', () => (
    <Container>
      <CodeSnippet className="language-javascript">
        {code}
      </CodeSnippet>
    </Container>
  ))
  .add('line numbers and highlight', () => (
    <Container>
      <CodeSnippet dataLine="2-4">
        {code}
      </CodeSnippet>
    </Container>
  ));
