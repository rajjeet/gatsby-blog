import React, { Component } from 'react';
import Prism from 'prismjs';

class CodeSnippet extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <pre>
          <code className="language-javascript">
            {children.trim()}
          </code>
        </pre>
      </>
    );
  }
}

export default CodeSnippet;
