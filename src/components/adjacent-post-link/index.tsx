import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../utils/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${theme.deviceSize.tablet}{
    flex-direction: row;
  }
  
  justify-content: space-around;
  align-items: center;
  padding: .5em;
  background-color: #ddd;
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.lightBoxShadow};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: .5em;
  &:hover {
    color: ${theme.secondaryColor}
  }
`;

export type TAdjacentPostLink = {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
};
type TAdjacentPostLinkProps = {
  previous: TAdjacentPostLink;
  next: TAdjacentPostLink;
}

const LinkHeader = styled.div`
  font-size: 0.6em;
`;

const PostTitle = styled.div`
  font-weight: 600;
  font-size: .9em;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  padding: 0 .25em;
`;

type TPostLinkProps = {side: 'left' | 'right'; title: string; slug: string};

const PostLink: React.FC< TPostLinkProps> = ({ side, title, slug }) => (
  <StyledLink to={slug}>
    {side === 'left' && <StyledIcon icon={faChevronLeft} size="2x" />}
    <div>
      <LinkHeader>{side === 'left' ? 'Previous Post' : 'Next Post'}</LinkHeader>
      <PostTitle>{title}</PostTitle>
    </div>
    {side === 'right' && <StyledIcon icon={faChevronRight} size="2x" />}
  </StyledLink>
);

export const AdjacentPostLink: React.FC<TAdjacentPostLinkProps> = ({ previous, next }) => {
  if (!previous && !next) return null;
  return (
    <Wrapper>
      {
        previous && <PostLink side="left" title={previous.frontmatter.title} slug={previous.fields.slug} />
      }
      {
        next && <PostLink side="right" title={next.frontmatter.title} slug={next.fields.slug} />
      }
    </Wrapper>
  );
};
