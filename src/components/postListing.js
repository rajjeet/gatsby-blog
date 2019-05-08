import React from "react";
import {Button, Divider, Header, Icon, Item} from "semantic-ui-react";
import {graphql, navigate, Link} from "gatsby";
import TagGroup from "./tagGroup";
import {Grid} from "semantic-ui-react";
import TagListing from "./tagListing";
import CategoryListing from './categoryListing';
import Img from 'gatsby-image';
import {Headshot} from "./Headshot";
import {SocialLinks} from "./SocialLinks";

function PostNavigationButtons(currentPage, numOfPages, paginationSlug) {
    return <>
        <Button
            disabled={currentPage <= 1}
            compact
            onClick={() => navigate(`${paginationSlug}${currentPage - 1}`)}>
            <Icon name={'chevron left'}/>Newer Posts
        </Button>
        <Button
            disabled={currentPage >= numOfPages}
            compact
            onClick={() => navigate(`${paginationSlug}${currentPage + 1}`)}>
            Older Posts<Icon name={'chevron right'}/>
        </Button>
    </>;
}

export default ({posts, heading, numOfPages, currentPage, paginationSlug}) => {
    const showPostNavigationButtons = currentPage && numOfPages && numOfPages > 1;
    return (
        <Grid stackable>
            <Grid.Column width={12}>
                <Header as={'h1'} style={{marginBottom: '0em'}}>{heading || 'Posts'}</Header>
                {
                    showPostNavigationButtons &&
                    <div>
                        <p style={{color: '#888', marginBottom: '.3em'}}>{currentPage} of {numOfPages} Pages</p>
                        {PostNavigationButtons(currentPage, numOfPages, paginationSlug)}
                    </div>
                }
                {
                    !showPostNavigationButtons &&
                    <Button style={{marginTop: '.4em'}} compact onClick={() => navigate('/blog/1')}>See All
                        Posts</Button>
                }
                <Item.Group link unstackable style={{backgroundColor: '#eee', padding: '1em', marginTop: '.4em'}}>
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
                                    <Item.Meta style={{marginTop: '0em'}}>{node.frontmatter.date} - {`${node.timeToRead} min read`}</Item.Meta>
                                    <Item.Description>{node.frontmatter.description}</Item.Description>
                                </Link>
                                <Item.Extra>
                                    <TagGroup categories={[{"fieldValue": node.frontmatter.category}]}
                                              tags={node.frontmatter.tags ? node.frontmatter.tags.map(tag => ({"fieldValue": tag})) : null}/>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    ))}
                </Item.Group>
                {showPostNavigationButtons && PostNavigationButtons(currentPage, numOfPages)}
            </Grid.Column>
            <Grid.Column width={4}>
                <CategoryListing/>
                <TagListing/>
                <Divider hidden/>
                <Headshot/>
                <Header as={'h3'} style={{margin: '0.2em 0em'}}>Rajjeet Phull</Header>
                <p>Software Developer. Specializing in .NET(C#), React, SQL Server, and AWS.</p>
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
