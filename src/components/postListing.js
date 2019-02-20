import React from "react";
import {Header, Item} from "semantic-ui-react";
import {Link} from "gatsby";
import TagGroup from "./tagGroup";
import {Grid} from "semantic-ui-react";
import TagListing from "./tagListing";
import CategoryListing from './categoryListing';
import Img from 'gatsby-image';

export default ({posts, heading}) => (
    <Grid stackable>
        <Grid.Column width={12}>
            <Header as={'h1'} style={{marginBottom: '0em'}}>{heading}</Header>
            <p style={{color: '#888', marginBottom: '0em'}}>{posts.length} Posts</p>
            <Item.Group link unstackable>
                {posts.map(({node}) => (
                    <Item key={node.id}>
                        {node.frontmatter.image &&
                            <Item.Image as={Img} fixed={node.frontmatter.image.childImageSharp.fixed} />

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
        </Grid.Column>
        <Grid.Column width={4}>
            <CategoryListing/>
            <TagListing />
        </Grid.Column>
    </Grid>
);
