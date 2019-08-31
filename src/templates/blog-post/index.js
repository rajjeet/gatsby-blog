import React from 'react';
import { graphql } from 'gatsby';
import Disqus from 'disqus-react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import TagGroup from '../../components/tag-group';
import Seo from '../../components/seo';
import * as theme from '../../utils/theme';
import TableOfContentContainer from './TableOfContentContainer';

const BlogPost = ({ className, data }) => {
  const { post } = data;
  const disqusConfig = {
    url: `http://ortmesh.com${post.fields.slug}`,
    identifier: post.id,
    title: post.frontmatter.title,
  };
  const {
    tags, image, title, date, description, category,
  } = post.frontmatter;
  return (
    <Layout>
      <Seo isBlogPost frontmatter={post.frontmatter} postImage={image.publicURL} />
      <div className={className}>
        <div className="post-summary">
          <h1>{title}</h1>
          <span>
            {date}
            {' - '}
            {post.timeToRead}
            {' min read - '}
            <Disqus.CommentCount shortname="ortmesh" config={disqusConfig}>
              Comments
            </Disqus.CommentCount>
          </span>
          <p>{description}</p>
          <TagGroup
            categories={[{ fieldValue: category }]}
            tags={tags ? tags.map((tag) => ({ fieldValue: tag })) : null}
          />
        </div>
        <br />
        <div>
          <TableOfContentContainer htmlContent={post.tableOfContents} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <br />
          <Disqus.DiscussionEmbed shortname="ortmesh" config={disqusConfig} />
        </div>
      </div>
    </Layout>
  );
};

const StyledBlogPost = styled(BlogPost)`
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
        post: markdownRemark(fields: { slug: { eq: $slug }, contentType: { eq: "post" } } ) {
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
