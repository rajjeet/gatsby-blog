import React, { useEffect, useState } from 'react';
import '../../../node_modules/tocbot/dist/tocbot.css';
import { graphql } from 'gatsby';
import Disqus from 'disqus-react';
import styled from 'styled-components';
import * as tocbot from 'tocbot';
import Prism from 'prismjs';
import { Layout } from '../../components/layout';
import { Seo } from '../../components/seo';

import { MarkdownMdxProvider } from '../../utils/MarkdownMDXProvider';
import { TProps } from './types';
import { PostSummary } from './post-summary';
import { PostNavigation } from './post-navigation';
import { siteMetadata } from '../../../gatsby-config';

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

  const { data } = props;
  const { post } = data;
  const disqusConfig = {
    url: `${siteMetadata.canonicalUrl}${post.fields.slug}`,
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
      />
      <Wrapper>
        <PostSummary
          description={description}
          date={date}
          title={title}
          timeToRead={post.timeToRead}
          disqusConfig={disqusConfig}
          tags={tags}
        />
        <Post>
          <MainContent>
            <div className="js-toc-content">
              <MarkdownMdxProvider content={post.body} />
            </div>
            <Disqus.DiscussionEmbed shortname={siteMetadata.title} config={disqusConfig} />
          </MainContent>
          <PostNavigation
            items={post.tableOfContents.items}
            handleButtonClick={toggleTableOfContentModal}
            showMobileToc={showMobileToc}
          />
        </Post>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  padding: 20px;         
`;

const MainContent = styled.div`
  flex: 3;  
  min-width: 0;
`;

const Post = styled.div`
  display: flex;
  flex-direction: row;    
`;

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

export default BlogPost;
