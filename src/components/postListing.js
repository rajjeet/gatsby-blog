import React from "react";
import {Divider, Header, Item} from "semantic-ui-react";
import {Link} from "gatsby";
import TagGroup from "./tagGroup";
import {Grid} from "semantic-ui-react";
import TagListing from "./tagListing";
import CategoryListing from './categoryListing';
import Img from 'gatsby-image';
import {Headshot} from "./Headshot";
import {SocialLinks} from "./SocialLinks";

export default ({posts, heading}) => (
    <Grid stackable>
        <Grid.Column width={12}>
            <Header as={'h1'} style={{marginBottom: '0em'}}>{heading}</Header>
            <p style={{color: '#888', marginBottom: '0em'}}>{posts.length} Posts</p>
            <Item.Group link unstackable>
                {posts.map(({node}) => (
                    <Item key={node.id}>
                        {node.frontmatter.image &&
                        <Img style={{margin: '.5em', width: '400px', borderRadius: '3%'}}
                             fluid={node.frontmatter.image.childImageSharp.fluid}/>
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
            <Divider hidden />
            <Headshot/>
            <Header as={'h3'} style={{margin: '0.2em 0em'}}>Rajjeet Phull</Header>
            <p>Site Author</p>
            <SocialLinks/>
        </Grid.Column>
    </Grid>
);
