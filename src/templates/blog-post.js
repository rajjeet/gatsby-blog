import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import TagGroup from "../components/TagGroup";
import * as PropTypes from "prop-types";
import {css} from '@emotion/core';
import colors from "../utils/colors";
import SEO from "../components/SEO";
import Disqus from 'disqus-react';
import styled from 'styled-components';

function TableOfContents({post}) {
    return <>
        <h4>Outline</h4>
        <div className={"ui list tableOfContents"} css={css`
                                            ul {
                                              padding-left: 1em;
                                              font-size: 1.2em;
                                              list-style-type: circle;
                                            }
                                            ul ul {
                                              padding-left: 1em;
                                              font-weight: normal;
                                              font-size: 0.9em;
                                            }
                                            ul ul ul {
                                              font-size: 0.8em;
                                            }
                                            ul > li {
                                                margin: .3em auto;
                                            }
                                            ul > li > ul > li {
                                                margin: 0 auto;
                                                color: #888;
                                            }
                                            ul > ul > ul > li {
                                                margin: 0 auto;
                                            }
                                            a {
                                              color: inherit;
                                            }
                                            a:hover {
                                              color: ${colors.secondaryColor};
                                            }
                                            p {
                                              margin-bottom: 0em;
                                            }
                                        `}
             dangerouslySetInnerHTML={{__html: post.tableOfContents}}/>
    </>;
}

TableOfContents.propTypes = {post: PropTypes.any};



const BlogPost = ({className, data}) => {
    const post = data.markdownRemark;
    const disqusConfig = {
        url: `http://ortmesh.com${post.fields.slug}`,
        identifier: post.id,
        title: post.frontmatter.title,
    };
    return (
        <Layout>
            <SEO isBlogPost frontmatter={post.frontmatter} postImage={post.frontmatter.image.publicURL}/>
            <div className={className}>
                <div className={'post-summary'}>
                    <h1>{post.frontmatter.title}</h1>
                    <span>{post.frontmatter.date} - {post.timeToRead} min read
                        - <Disqus.CommentCount shortname={'ortmesh'}
                                               config={disqusConfig}>Comments</Disqus.CommentCount></span>
                    <p>{post.frontmatter.description}</p>
                    <TagGroup categories={[{"fieldValue": post.frontmatter.category}]}
                              tags={post.frontmatter.tags ? post.frontmatter.tags.map(tag => ({"fieldValue": tag})) : null}/>
                </div>
                <br />
                <div>
                    <TableOfContents post={post}/>
                    <div dangerouslySetInnerHTML={{__html: post.html}}/>
                    <br/>
                    <Disqus.DiscussionEmbed shortname={"ortmesh"} config={disqusConfig}/>
                </div>
            </div>
        </Layout>
    );
};

const StyledBlogPost = styled(BlogPost)`
  h1 {
    margin-bottom: 0;    
  }
  .post-summary {
    span {
      font-size: .9em;      
    }
  }
`;

export default StyledBlogPost;

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }, contentType: { eq: "post" } } ) {
        id
        timeToRead
        html
        tableOfContents(
        maxDepth: 4
        )
        fields {
        slug
    }
        frontmatter {
        title
        tags
        date
        category
        description
        image {
        publicURL
    }
    }
    }
    }
    `;
