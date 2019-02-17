import React from "react";
import {Header, Item} from "semantic-ui-react";
import {Link} from "gatsby";
import TagGroup from "./tagGroup";

export default ({posts, heading}) => (
    <div>
        <Header as={'h1'} style={{marginBottom: '0em'}}>{heading}</Header>
        <p style={{color: '#888', marginBottom: '0em'}}>{posts.length} Posts</p>
        <Item.Group>
            {posts.map(({node}) => (
                <Item key={node.id}>
                    <Item.Content>
                        <Link to={node.fields.slug}
                              style={{textDecoration: 'none', color: 'inherit'}}>
                            <Item.Header as={'h3'}
                                         style={{marginBottom: '0em'}}>{node.frontmatter.title}</Item.Header>
                            <Item.Meta style={{marginTop: '0em'}}>{node.frontmatter.date}</Item.Meta>
                            <Item.Description>{node.excerpt}</Item.Description>
                            <Item.Extra>
                                <TagGroup tags={node.frontmatter.tags}/>
                            </Item.Extra>
                        </Link>
                    </Item.Content>
                </Item>
            ))}
        </Item.Group>
    </div>
);
