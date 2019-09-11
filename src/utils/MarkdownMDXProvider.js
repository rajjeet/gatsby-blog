import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import AutoLinkHeader from '../components/auto-link-header';

class MarkdownMdxProvider extends React.Component {
  state = {
    ...['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce((a, v) => {
      a[v] = AutoLinkHeader(v); // eslint-disable-line no-param-reassign
      return a;
    }, {}),
  };

  render() {
    const { content } = this.props;
    return (
      <MDXProvider components={this.state}>
        {content && <MDXRenderer>{content}</MDXRenderer>}
      </MDXProvider>
    );
  }
}

export default MarkdownMdxProvider;
