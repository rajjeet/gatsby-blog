import React from "react";
import {Button, Divider, Header, Icon, Item} from "semantic-ui-react";
import {graphql, Link} from "gatsby";
import TagGroup from "./tagGroup";
import {Grid} from "semantic-ui-react";
import TagListing from "./tagListing";
import CategoryListing from './categoryListing';
import Img from 'gatsby-image';
import {Headshot} from "./Headshot";
import {SocialLinks} from "./SocialLinks";

function PostNavigationButtons(currentPage, numOfPages) {
    return <>
        <Button
            disabled={currentPage <= 1}
            compact
            as={Link}
            to={`blog/${currentPage - 1}`}>
            <Icon name={'chevron left'}/>See Newer Posts
        </Button>
        <Button
            disabled={currentPage >= numOfPages}
            compact as={Link}
            to={`blog/${currentPage + 1}`}>
            See Older Posts<Icon name={'chevron right'}/>
        </Button>
    </>;
}

export default ({posts, heading, numOfPages, currentPage}) => (
    <Grid stackable>
        <Grid.Column width={12}>
            <Header as={'h1'} style={{marginBottom: '0em'}}>{heading || 'Posts'}</Header>
            {
                currentPage && numOfPages ?
                    <div>
                        <p style={{color: '#888', marginBottom: '.3em'}}>{currentPage} of {numOfPages} Pages</p>
                        {PostNavigationButtons(currentPage, numOfPages)}
                    </div>
                    :
                    <Button compact as={Link} to={'/blog/1'}>See All Posts</Button>

            }
            {

            }
            <Item.Group link unstackable style={{backgroundColor: '#eee', padding: '1em'}}>
                {posts.map(({node}) => (
                    <Item key={node.id}>
                        {node.frontmatter.image &&
                        <Item.Image size={'medium'}>
                            <Img style={{margin: '.5em 1em', borderRadius: '3%'}}
                                 fluid={node.frontmatter.image.childImageSharp.fluid}/>
                        </Item.Image>
                        }
                        <Item.Content>
                            <Link to={node.fields.slug}
                                  style={{textDecoration: 'none', color: 'inherit'}}>
                                <Item.Header as={'h3'}
                                             style={{marginBottom: '0em'}}>{node.frontmatter.title}</Item.Header>
                                <Item.Meta style={{marginTop: '0em'}}>{node.frontmatter.date}</Item.Meta>
                                <Item.Description>{node.frontmatter.description}</Item.Description>
                            </Link>
                            <Item.Extra>
                                <TagGroup categories={[{"fieldValue": node.frontmatter.category}]}
                                          tags={node.frontmatter.tags.map(tag => ({"fieldValue": tag}))}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
            {PostNavigationButtons(currentPage, numOfPages)}
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
);

export const query = graphql`
    fragment PostListingMarkdownFragment on MarkdownRemark {
        id
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
