import React from "react";
import {Item} from "semantic-ui-react";
import {Link} from "gatsby";
import TagGroup from "./tagGroup";

export default ({posts}) => (
    <Item.Group>
        {posts.map(({node}) => (
            <Item key={node.id}>
                <Item.Content>
                    <Link to={node.fields.slug}
                          style={{textDecoration: 'none', color: 'inherit'}}>
                        <Item.Header as={'h2'}
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
);
