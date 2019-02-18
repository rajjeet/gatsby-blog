import React from "react";
import {Header, Item} from "semantic-ui-react";
import {Link} from "gatsby";
import TagGroup from "./tagGroup";
import {Grid} from "semantic-ui-react";
import TagListing from "./tagListing";
import CategoryListing from './categoryListing';

export default ({posts, heading}) => (
    <Grid stackable>
        <Grid.Column width={11}>
            <Header as={'h1'} style={{marginBottom: '0em'}}>{heading}</Header>
            <p style={{color: '#888', marginBottom: '0em'}}>{posts.length} Posts</p>
            <Item.Group link>
                {posts.map(({node}) => (
                    <Item key={node.id}>
                        <Item.Content>
                            <Link to={node.fields.slug}
                                  style={{textDecoration: 'none', color: 'inherit'}}>
                                <Item.Header as={'h3'}
                                             style={{marginBottom: '0em'}}>{node.frontmatter.title}</Item.Header>
                                <Item.Meta style={{marginTop: '0em'}}>{node.frontmatter.date}</Item.Meta>
                                <Item.Description>{node.excerpt}</Item.Description>
                            </Link>
                            <Item.Extra>
                                <TagGroup categories={[{"fieldValue" : node.frontmatter.category}]} tags={node.frontmatter.tags.map(tag => ({"fieldValue": tag}))}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Grid.Column>
        <Grid.Column width={5}>
            <CategoryListing />
            <TagListing/>
        </Grid.Column>
    </Grid>
);
