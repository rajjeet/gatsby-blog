import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { TProps } from './types';

export const SimplePostListing: React.FC<TProps> = ({ posts }) => (
  <div>
    <h3>Blog Posts</h3>
    <S.ul>
      {
        posts.map((
          { node: { fields: { slug }, frontmatter: { title, dateCreated }, timeToRead } },
        ) => (
          <S.Link aria-label={`See post: ${title}`} key={slug} to={slug}>
            <li>
              <h4>{title}</h4>
              <div>
                <S.Date>{dateCreated}</S.Date>
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
           font-size: .8rem;
        }`,
  ul: styled.ul`
        list-style: none;
        margin-left: 0;
        padding-left: 0;
        li {
            margin-bottom: .25rem;
            box-shadow: ${(props): string => props.theme.boxShadow};
            padding: .7rem;
            border-radius: ${(props): string => props.theme.borderRadius};
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

