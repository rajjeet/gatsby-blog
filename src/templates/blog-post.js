import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import {Divider, Header} from "semantic-ui-react";
import TagGroup from "../components/tagGroup";

export default ({data}) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <div>
                <Header as={'h1'} style={{marginBottom: '0em'}}>{post.frontmatter.title}</Header>
                <div style={{marginBottom: '.7em'}}>{post.frontmatter.date}</div>
                <TagGroup tags={post.frontmatter.tags.map(tag => ({"fieldValue": tag}))}/>
                <Divider hidden />
                <div dangerouslySetInnerHTML={{__html: post.html}} />
            </div>
        </Layout>
    )
};

export const query = graphql`
    query($slug: String!) {
      markdownRemark(fields: {slug: {eq: $slug}}) {
        html
        frontmatter {
          title
          tags
          date
        }
      }
    }
`;
