import React from "react";
import {graphql, Link} from "gatsby";
import TagGroup from "./TagGroup";
import TagListing from "./TagListing";
import CategoryListing from './CategoryListing';
import GatsbyImage from 'gatsby-image';
import AuthorCard from "./AuthorCard";
import AuthorSocialLinkGroup from "./AuthorSocialLinkGroup";
import * as theme from '../utils/colors'
import {getCategorySlug, getTagSlug} from "../utils/helperFunctions";
import PaginationButtonGroup from "./PaginationButtonGroup";
import {navigate} from "gatsby";
import Button from "./Button";
import styled from 'styled-components';

const PostListing = ({className, posts, heading, numOfPages, currentPage, paginationSlug}) => {
    const showPostNavigationButtons = currentPage && numOfPages && numOfPages > 1;
    return (
        <div className={className}>
            <S.Main>
                <h1>{heading || 'Posts'}</h1>
                {
                    !showPostNavigationButtons &&
                    <span>&emsp;
                        <Button onClick={() => navigate('/blog/1')}>
                            See All Posts
                        </Button>
                    </span>
                }
                {
                    showPostNavigationButtons &&
                    <div>
                        <p style={{color: '#888', marginBottom: '.3em'}}>{currentPage} of {numOfPages} Pages</p>
                        <PaginationButtonGroup currentPage={currentPage} numOfPages={numOfPages}
                                               paginationSlug={paginationSlug}/>
                    </div>
                }

                <div style={{
                    backgroundColor: 'whitesmoke',
                    padding: '.5em 1em',
                    marginTop: '.4em',
                }}>
                    {posts.map(({node}) => (
                        <div className={'post'} key={node.id}>
                            <div className={'image-container'}>
                                <S.GatsbyImage fluid={node.frontmatter.image.childImageSharp.fluid}/>
                            </div>
                            <div className={'post-summary'}>
                                <Link to={node.fields.slug}>
                                    <h3 style={{marginBottom: '0em'}}>{node.frontmatter.title}</h3>
                                    <div style={{marginTop: '0em'}}>
                                        {node.frontmatter.date} - {`${node.timeToRead} min read`}
                                    </div>
                                    <div>{node.frontmatter.description}</div>
                                </Link>
                                <TagGroup tags={[{fieldValue: node.frontmatter.category}]}
                                          getSlug={getCategorySlug}
                                          inline={true}/>
                                <TagGroup
                                    tags={node.frontmatter.tags && node.frontmatter.tags.map(tag => ({fieldValue: tag}))}
                                    getSlug={getTagSlug} inline={true}/>
                            </div>
                        </div>

                    ))}
                </div>
                {
                    showPostNavigationButtons &&
                    <PaginationButtonGroup currentPage={currentPage} numOfPages={numOfPages}
                                           paginationSlug={paginationSlug}/>
                }
            </S.Main>
            <S.Sidebar>
                <CategoryListing/>
                <TagListing/>
                <br/>
                <AuthorCard/>
                <AuthorSocialLinkGroup/>
            </S.Sidebar>
        </div>
    )
};

export const S = {
    GatsbyImage: styled(GatsbyImage)`
      margin: .5em 1em;
      border-radius: 5px;
  `,
    Main: styled.div`
      width: 70%;
      display: inline-block;
      @media (max-width: ${theme.tabletBreakpoint}) {
        width: 100%;
      }
      
  `,
    Sidebar: styled.div`
      width: 30%;
      display: inline-block;
      padding: 1em;
      @media (max-width: ${theme.tabletBreakpoint}) {
        width: 100%;
      }
  `
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
    fragment PostListingMarkdownFragment on MarkdownRemark {
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
