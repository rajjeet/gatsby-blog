import {Link} from "gatsby";
import React from "react";
import styled from 'styled-components';

const SimplePostListing = ({posts, className}) => (
    <div className={className}>
        <h3>Blog Posts</h3>
        <ul>
            {
                posts.map(({node}) => (
                    <li>
                        <S.Link to={node.fields.slug}>
                            <h4>{node.frontmatter.title}</h4>
                            <div>
                                <span>{node.frontmatter.date}</span>
                                <span>&emsp;{node.timeToRead} mins read</span>
                            </div>
                        </S.Link>
                    </li>
                ))
            }
        </ul>
    </div>
);

const S = {
    Link: styled(Link)`
      text-decoration: none;
      color: black;
    h4 {
        margin-bottom: 0;        
    }
    div {
       font-size: .8em;
    }
`
};

const StyledSimplePostListing = styled(SimplePostListing)`
  padding: .7em;
  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
    li {
        margin-bottom: .25em;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: .7em;
        border-radius: 5px;
    }
  }
`;

export default StyledSimplePostListing;