import React from 'react';
import {Link, graphql} from "gatsby";
import Layout from '../components/layout';
import TagGroup from '../components/tagGroup';
import {Header, Item} from "semantic-ui-react";

export default ({data}) => {
    return (
        <Layout>
            <div>
                <Header as={'h3'} style={{marginBottom: '0em'}}>Latest Posts</Header>
                <p style={{color: '#888', marginBottom: '0em'}}>{data.allMarkdownRemark.totalCount} Posts</p>
                <Item.Group>
                    {data.allMarkdownRemark.edges.map(({node}) => (
                        <Item key={node.id}>
                            <Item.Content>
                                <Link to={node.fields.slug}
                                      style={{textDecoration: 'none', color: 'inherit'}}>
                                    <Item.Header as={'h2'}
                                                 style={{marginBottom: '0em'}}>{node.frontmatter.title}</Item.Header>
                                    <Item.Meta style={{marginTop: '0em'}}>{node.frontmatter.date}</Item.Meta>
                                    <Item.Description>{node.excerpt}</Item.Description>
                                    <Item.Extra>
                                        <TagGroup tags={node.frontmatter.tags}/>
                                    </Item.Extra>
                                </Link>
                            </Item.Content>
                        </Item>
                    ))}
                </Item.Group>
            </div>
        </Layout>
    );
}
export const query = graphql`
                    query {
                    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC})  {
                    totalCount
                    edges {
                    node {
                    id,
                    frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY")
                    tags
                }
                    fields {
                    slug
                }
                    excerpt
                }
                }
                }
                }
                    `;
