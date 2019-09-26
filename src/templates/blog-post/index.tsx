import React, { useEffect, useState } from 'react';
import '../../../node_modules/tocbot/dist/tocbot.css';
import { graphql } from 'gatsby';
import Disqus from 'disqus-react';
import styled from 'styled-components';
import * as tocbot from 'tocbot';
import { faList, faTimes } from '@fortawesome/free-solid-svg-icons';
import Prism from 'prismjs';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import { Layout } from '../../components/layout';
import TagGroup from '../../components/tag-group';
import Seo from '../../components/seo';
import * as theme from '../../utils/theme';
import FloatingMobileButton from '../../components/primitives/floating-mobile-button';
import { getTagSlug } from '../../utils/slugs';
import MarkdownMDXProvider from '../../utils/MarkdownMDXProvider';
import { TableOfContents } from '../../components/table-of-contents';
import { TProps } from './types';

const BlogPost: React.FC<TProps> = (props) => {
  const [showMobileToc, setShowMobileToc] = useState(false);

  useEffect(() => {
    document.getElementById('static-toc').innerHTML = '';
    tocbot.init({
      tocSelector: '.js-toc',
      contentSelector: '.js-toc-content',
      headingSelector: 'h1, h2, h3, h4, h5, h6',
      hasInnerContainers: false,
      orderedList: false,
    });
    Prism.highlightAll();
  }, []);

  const toggleTableOfContentModal = (): void => setShowMobileToc(!showMobileToc);

  const { className, data } = props;
  const { post } = data;
  const disqusConfig = {
    url: `http://ortmesh.com${post.fields.slug}`,
    identifier: post.id,
    title: post.frontmatter.title,
  };
  const {
    tags, image, title, date, description,
  } = post.frontmatter;

  return (
    <Layout>
      <Seo
        isBlogPost
        frontmatter={{ ...post.frontmatter, slug: post.fields.slug }}
        postImage={image.publicURL}
        postData={null}
      />
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
            tags={tags ? tags.map((tag) => ({ fieldValue: tag })) : null}
            getSlug={getTagSlug}
          />
        </div>
        <br />
        <MainColumn>
          <MainContent>
            <div className="js-toc-content">
              <MarkdownMDXProvider content={post.body} />
            </div>
            <br />
            <Disqus.DiscussionEmbed shortname="ortmesh" config={disqusConfig} />
          </MainContent>
          <SideBar>
            <TocWrapper>
              <TableOfContents items={post.tableOfContents.items} />
              <div className="js-toc" />
            </TocWrapper>
            <FloatingButton>
              <FloatingMobileButton
                aria-label="Open table of contents"
                icon={faList}
                onClick={toggleTableOfContentModal}
              />
            </FloatingButton>
          </SideBar>
        </MainColumn>
        {
          showMobileToc && (
            <div data-testid="mobile-toc">
              {' '}
              <MobileTableOfContentsModal
                onClick={toggleTableOfContentModal}
              >
                <TableOfContents items={post.tableOfContents.items} />
                <FloatingButton>
                  <FloatingMobileButton
                    aria-label="Close table of contents"
                    icon={faTimes}
                    onClick={toggleTableOfContentModal}
                  />
                </FloatingButton>
              </MobileTableOfContentsModal>

            </div>
          )
        }
      </div>
    </Layout>
  );
};

const MobileTableOfContentsModal = styled.div`
  padding: 1rem;
  z-index: 2;
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const FloatingButton = styled.div`
  display: none;
  @media (max-width: ${theme.bigMobileBreakpoint}){
    display: block;
  }
  position: fixed;
  bottom: 0;
  right: 0;
`;

const TocWrapper = styled.div`  
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

const MainColumn = styled.div`
  display: flex;
  flex-direction: row;    
`;

const SideBar = styled.div`
  flex: 1;
    @media (max-width: ${theme.bigMobileBreakpoint}){
     flex: 0;
     padding: 0;
    }
  padding-left: 1rem;
  min-width: 0;
`;

const MainContent = styled.div`
  flex: 3;  
  min-width: 0;
`;

const StyledBlogPost = styled(BlogPost)`
  padding: 20px;
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
        post: mdx(fields: { slug: { eq: $slug }, contentType: { eq: "post" } } ) {
            id
            timeToRead
            body
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
