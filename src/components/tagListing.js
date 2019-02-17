import React from 'react';
import {graphql, StaticQuery} from "gatsby";
import {Header, Label} from "semantic-ui-react";
import {getTagSlug} from "../utils/helperFunctions";

export default () => (
    <StaticQuery query={
        graphql`
         query {
          allMarkdownRemark(limit: 2000, filter: {frontmatter: {draft: {ne: true}}}) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
        `}

                 render={data => (
                     <>
                         <Header as={'h5'}>Explore</Header>
                         <Label.Group tag>
                             {data.allMarkdownRemark.group.map(tagGroup =>
                                 <Label as={'a'} key={tagGroup.fieldValue}
                                        onClick={() => window.location.href = getTagSlug(tagGroup.fieldValue)}>{tagGroup.fieldValue}
                                     <Label.Detail>{tagGroup.totalCount}</Label.Detail>
                                 </Label>)}
                         </Label.Group>
                     </>
                 )}
    />
);
