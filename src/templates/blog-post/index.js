import React, { Component } from 'react';
import '../../../node_modules/tocbot/dist/tocbot.css';
import { graphql } from 'gatsby';
import Disqus from 'disqus-react';
import styled from 'styled-components';
import * as tocbot from 'tocbot';
import Layout from '../../components/layout';
import TagGroup from '../../components/tag-group';
import Seo from '../../components/seo';
import * as theme from '../../utils/theme';
import StaticTableOfContentContainer from './TableOfContentContainer';

class BlogPost extends Component {
  componentDidMount() {
    document.getElementById('static-toc').innerHTML = '';
    tocbot.init({
      tocSelector: '.js-toc',
      contentSelector: '.js-toc-content',
      headingSelector: 'h1, h2, h3, h4, h5, h6',
      hasInnerContainers: false,
      orderedList: false,
    });
  }

  render() {
    const { className, data } = this.props;
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
          <MainColumn>
            <MainContent>
              <div className="js-toc-content">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
              <br />
              <Disqus.DiscussionEmbed shortname="ortmesh" config={disqusConfig} />
            </MainContent>
            <SideBar>
              <TableOfContents>
                <h4>Outline</h4>
                <StaticTableOfContentContainer htmlContent={post.tableOfContents} />
                <div className="js-toc" />
              </TableOfContents>
            </SideBar>
          </MainColumn>
        </div>
      </Layout>
    );
  }
}

const MainColumn = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TableOfContents = styled.div`  
  @media (max-width: ${theme.bigMobileBreakpoint}){
      display: none;
    }
  position: sticky;
  top: 1rem;
  .toc-list-item {
    a {
      text-decoration: none;
      left: 1px;
    }    
  } 
  .toc-list {
    list-style: none;    
  } 
  .is-active-link {
    color: ${theme.primaryColor};    
    &:before {
    background-color: ${theme.primaryColor}
    }
  }
  overflow: hidden;
  font-size: 1rem;
`;

const SideBar = styled.div`
  flex: 1;
    @media (max-width: ${theme.bigMobileBreakpoint}){
     flex: 0;
     padding: 0;
    }
  padding-left: 1rem;
`;

const MainContent = styled.div`
  flex: 4;
`;

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
