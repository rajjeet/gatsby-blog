import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import SchemaOrg from './SchemaOrg';
import { TProps } from './types';

export const Seo: React.FC<TProps> = ({
  frontmatter, postImage, isBlogPost,
}) => {
  const { site: { siteMetadata: seo } } = useStaticQuery(
    graphql`
        {
            site {
                siteMetadata {
                    title
                    description
                    canonicalUrl
                    image
                    author {
                        name
                    }
                    organization {
                        name
                        url
                        logo
                    }
                    social {
                        twitter
                        fbAppID
                    }
                }
            }
        }
    `,
  );

  const postMeta = frontmatter || {
    title: '',
    description: '',
    slug: '',
    date: '',
  };

  const title = postMeta.title || seo.title;
  const description = postMeta.description || seo.description;
  const image = postImage ? `${seo.canonicalUrl}${postImage}` : seo.image;
  const url = postMeta.slug
    ? `${seo.canonicalUrl}${postMeta.slug}`
    : seo.canonicalUrl;
  const datePublished = isBlogPost ? postMeta.date : '';
  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <html lang="en" />
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="robots" content="index, follow" />

        {/* OpenGraph tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:site_name" content={seo.organization.name} />
        <meta property="fb:app_id" content={seo.social.fbAppID} />

        {/* Twitter Card tags */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.social.twitter} />
        <meta name="twitter:site" content={seo.social.twitter} />
      </Helmet>
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        dateModified={datePublished}
        canonicalUrl={seo.canonicalUrl}
        author={seo.author}
        organization={seo.organization}
        defaultTitle={seo.title}
      />
    </>
  );
};

