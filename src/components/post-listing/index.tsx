import React from 'react';
import { graphql, Link, navigate } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';
import TagGroup from '../tag-group';
import TagListing from '../tag-listing';
import CategoryListing from '../category-listing';
import AuthorCard from '../author-card';
import AuthorSocialLinkGroup from '../author-social-link-group';
import * as theme from '../../utils/theme';
import { getCategorySlug, getTagSlug } from '../../utils/slugs';
import PaginationButtonGroup from '../pagination-button-group';
import Button from '../primitives/button';

const PostListing = ({
  className, posts, heading, numOfPages, currentPage, paginationSlug,
}) => {
  const showPostNavigationButtons = currentPage && numOfPages && numOfPages > 1;
  return (
    <div className={className}>
      <S.Main>
        <h1>{heading || 'Posts'}</h1>
        {
          !showPostNavigationButtons
          && (
            <span>
&emsp;
              <Button onClick={() => navigate('/blog/1')}>
                            See All Posts
              </Button>
            </span>
          )
        }
        {
          showPostNavigationButtons
          && (
            <div>
              <p style={{ color: '#888', marginBottom: '.3em' }}>
                {currentPage}
                {' '}
                of
                {' '}
                {numOfPages}
                {' '}
                Pages
              </p>
              <PaginationButtonGroup
                currentPage={currentPage}
                numOfPages={numOfPages}
                paginationSlug={paginationSlug}
              />
            </div>
          )
        }

        <div style={{
          backgroundColor: 'whitesmoke',
          padding: '.5em 1em',
          marginTop: '.4em',
        }}
        >
          {posts.map(({
            node: {
              id, fields, timeToRead, frontmatter: {
                title, tags, category, image, date, description,
              },
            },
          }) => {
            const processedTags = tags && tags.map((tag) => ({ fieldValue: tag }));
            const processedCategory = { fieldValue: category };
            return (
              <div className="post" key={id}>
                <div className="image-container">
                  <S.GatsbyImage
                    alt={title}
                    fluid={image.childImageSharp.fluid}
                  />
                </div>
                <div className="post-summary">
                  <Link to={fields.slug} style={{ color: 'black', textDecoration: 'none' }}>
                    <h3 style={{ marginBottom: '0em' }}>{title}</h3>
                    <div style={{ marginTop: '0em', color: 'dimgray', fontSize: '.8em' }}>
                      {date}
                      {' - '}
                      {`${timeToRead} min read`}
                    </div>
                    <div style={{ fontSize: theme.smallFontSize }}>
                      {description}
                    </div>
                  </Link>
                  <TagGroup
                    tags={[processedCategory]}
                    getSlug={getCategorySlug}
                    inline
                  />
                  <TagGroup
                    tags={processedTags}
                    getSlug={getTagSlug}
                    inline
                  />
                </div>
              </div>
            );
          })}
        </div>
        {
          showPostNavigationButtons
          && (
            <PaginationButtonGroup
              currentPage={currentPage}
              numOfPages={numOfPages}
              paginationSlug={paginationSlug}
            />
          )
        }
      </S.Main>
      <S.Sidebar>
        <CategoryListing />
        <TagListing />
        <br />
        <AuthorCard />
        <AuthorSocialLinkGroup />
      </S.Sidebar>
    </div>
  );
};

export const S = {
  GatsbyImage: styled(GatsbyImage)`
      margin: .5em 1em;
      border-radius: 5px;
  `,
  Main: styled.div`
      width: 70%;
      display: inline-block;
      vertical-align: top;
      @media (max-width: ${theme.computerBreakpoint}) {
        width: 100%;
      }      
      
  `,
  Sidebar: styled.div`
      width: 30%;
      display: inline-block;
      padding: 1em;
      box-sizing: border-box;
      @media (max-width: ${theme.computerBreakpoint}) {
        width: 100%;
      }
  `,
};

const StyledPostListing = styled(PostListing)`
  h1 {
      margin-bottom: 0;
      display: inline-block;
  }
  .post {
    margin: .7em auto;
    box-shadow: ${theme.lightBoxShadow};
    padding: .7em;
    background-color: white;
    border-radius: 5px;
    :hover {
      box-shadow: ${theme.boxShadow};
      transform: translateY(-2px);
      transition: ease .3s;
      pointer: cursor;
    }
  }
  .image-container {
    display: inline-block;
    width: 30%;
    @media (max-width: ${theme.bigMobileBreakpoint}){
      display: none;
    }
  }
  .post-summary {
      width: 65%;
      vertical-align: top;
      color: black;
      display: inline-block;
      text-decoration: none;
      h3 {
        margin-top: 0;
      }
      div {
        margin: .3em auto;
      }
      @media (max-width: ${theme.bigMobileBreakpoint}){
       width: 100%;
      }
    }
`;

export default StyledPostListing;

export const query = graphql`
    fragment PostListingMarkdownFragment on Mdx {
        id
        timeToRead
        frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
            category
            description
            image {
                childImageSharp  {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        fields {
            slug
        }
        excerpt(pruneLength: 80)
    }
`;