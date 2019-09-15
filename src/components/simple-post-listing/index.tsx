import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import * as theme from '../../utils/theme';
import { TProps } from './types';

const SimplePostListing: React.FC<TProps> = ({ posts }) => (
  <div>
    <h3>Blog Posts</h3>
    <S.ul>
      {
        posts.map(({ node: { fields: { slug }, frontmatter: { title, date }, timeToRead } }) => (
          <S.Link aria-label={`See post: ${title}`} key={slug} to={slug}>
            <li>
              <h4>{title}</h4>
              <div>
                <S.Date>{date}</S.Date>
                <span>
                  {timeToRead}
                  {' '}
                  mins read
                </span>
              </div>
            </li>
          </S.Link>
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
            margin: 0 auto;        
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
        `,
  Date: styled.span`
      padding-right: .5rem;
    `,
};

export default SimplePostListing;
