import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import TagGroup from "../components/TagGroup";
import SEO from "../components/SEO";
import Disqus from 'disqus-react';
import styled from 'styled-components';
import * as theme from '../utils/colors';

const TableOfContents = ({className, post}) => (
    <div className={className}>
        <h4>Outline</h4>
        <div dangerouslySetInnerHTML={{__html: post.tableOfContents}}/>
    </div>
);

const StyledTableOfContents = styled(TableOfContents)`
    a {
      color: #444;
      :hover {
        color: ${theme.primaryColor};
        cursor: pointer;
      }
    } 
       
    > div > ul {
      list-style-type: none;
      padding-left: 0;
      > li {
        margin-bottom: .3em;
        > p {
        margin-bottom: 0;
        }
      }              
    }
`;

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
                <br/>
                <div>
                    <StyledTableOfContents post={post}/>
                    <div dangerouslySetInnerHTML={{__html: post.html}}/>
                    <br/>
                    <Disqus.DiscussionEmbed shortname={"ortmesh"} config={disqusConfig}/>
                </div>
            </div>
        </Layout>
    );
};

const StyledBlogPost = styled(BlogPost)`
    width: 80%;
    margin: auto;   
    @media (max-width: ${theme.bigMobileBreakpoint}){
      width: 95%;
    }
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
