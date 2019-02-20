import React from 'react';
import {graphql, StaticQuery} from "gatsby";
import {Header} from "semantic-ui-react";
import TagGroup from './tagGroup';

export default () => (
    <StaticQuery query={
        graphql`
         query {
          allMarkdownRemark(limit: 2000, filter: {frontmatter: {draft: {ne: true}}}) {
            group(field: frontmatter___category) {
              fieldValue
              totalCount
            }
          }
        }
        `}

                 render={data => (
                     <>
                         <Header style={{margin: '.5em auto'}} as={'h5'}>Categories</Header>
                         <TagGroup categories={data.allMarkdownRemark.group} />
                     </>
                 )}
    />
);