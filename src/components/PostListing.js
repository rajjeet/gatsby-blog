import React from "react";
import {Button, Grid, Header, Item} from "semantic-ui-react";
import {graphql, Link} from "gatsby";
import TagGroup from "./TagGroup";
import TagListing from "./TagListing";
import CategoryListing from './CategoryListing';
import Img from 'gatsby-image';
import AuthorCard from "./AuthorCard";
import {SocialLinks} from "./SocialLinks";
import * as theme from '../utils/colors'
import {getCategorySlug, getTagSlug} from "../utils/helperFunctions";
import PaginationButtonGroup from "./PaginationButtonGroup";

export default ({posts, heading, numOfPages, currentPage, paginationSlug}) => {
    const showPostNavigationButtons = currentPage && numOfPages && numOfPages > 1;
    return (
        <Grid stackable>
            <Grid.Column width={12}>
                <Header as={'h1'} style={{marginBottom: '0em', display: 'inline-block'}}>
                    {heading || 'Posts'}
                </Header>
                {
                    !showPostNavigationButtons &&
                    <span>&emsp;
                        <Button as={Link} basic color={'blue'} compact style={{marginTop: '.4em'}} to={'/blog/1'}>
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

                <Item.Group link unstackable style={{
                    backgroundColor: 'whitesmoke',
                    padding: '1em',
                    marginTop: '.4em',
                    boxShadow: theme.boxShadow
                }}>
                    {posts.map(({node}) => (
                        <Item key={node.id}>
                            {node.frontmatter.image &&
                            <Item.Image size={'medium'}>
                                <Link to={node.fields.slug}>
                                    <Img style={{margin: '.5em 1em', borderRadius: '3%'}}
                                         fluid={node.frontmatter.image.childImageSharp.fluid}/>
                                </Link>
                            </Item.Image>
                            }
                            <Item.Content>
                                <Link to={node.fields.slug}
                                      style={{textDecoration: 'none', color: 'inherit'}}>
                                    <Item.Header as={'h3'}
                                                 style={{marginBottom: '0em'}}>{node.frontmatter.title}</Item.Header>
                                    <Item.Meta
                                        style={{marginTop: '0em'}}>{node.frontmatter.date} - {`${node.timeToRead} min read`}</Item.Meta>
                                    <Item.Description>{node.frontmatter.description}</Item.Description>
                                </Link>
                                <Item.Extra>
                                    <TagGroup tags={[{fieldValue: node.frontmatter.category}]} getSlug={getCategorySlug}
                                              inline={true}/>
                                    <TagGroup
                                        tags={node.frontmatter.tags && node.frontmatter.tags.map(tag => ({fieldValue: tag}))}
                                        getSlug={getTagSlug} inline={true}/>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    ))}
                </Item.Group>
                {
                    showPostNavigationButtons &&
                    <PaginationButtonGroup currentPage={currentPage} numOfPages={numOfPages}
                                           paginationSlug={paginationSlug}/>
                }
            </Grid.Column>
            <Grid.Column width={4}>
                <CategoryListing/>
                <TagListing/>
                <br/>
                <AuthorCard/>
                <SocialLinks/>
            </Grid.Column>
        </Grid>
    )
};

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
