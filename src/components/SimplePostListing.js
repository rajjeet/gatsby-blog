import {Link} from "gatsby";
import React from "react";
import styled from 'styled-components';
import * as theme from '../utils/colors';

export default ({posts}) => (
    <div>
        <h3>Blog Posts</h3>
        <S.ul>
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
        </S.ul>
    </div>
);

export const S = {
    Link: styled(Link)`
          text-decoration: none;
          color: black;
        h4 {
            margin-bottom: 0;        
        }
        div {
           font-size: .8em;
        }`,
    ul: styled.ul`
        list-style: none;
        margin-left: 0;
        padding-left: 0;
        li {
            margin-bottom: .25em;
            box-shadow: ${theme.boxShadow};
            padding: .7em;
            border-radius: 5px;
            :hover {
              transform: translateY(-3px);
              transition: ease .3s;
            }
        }
        a {
            color: black;
        }
        
`

};
