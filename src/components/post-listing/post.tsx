import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { TagGroup } from '../tag-group';
import { getTagSlug } from '../../utils/slugs';
import { TPostProps } from './types';

export const Post: React.FC<TPostProps> = ({ node }) => {
  const { fields, timeToRead, frontmatter } = node;
  const {
    title, tags, image, dateCreated, description,
  } = frontmatter;
  const processedTags = tags && tags.map((tag) => ({ fieldValue: tag }));
  return (
    <PostWrapper>
      <StyledLink to={fields.slug}>
        <StyledGatsbyImage fluid={[image.childImageSharp.fluid]} />
        <PostSummary>
          <PostTitle>{title}</PostTitle>
          <PostDetails>{`${dateCreated} - ${timeToRead} min read`}</PostDetails>
          <PostDescription>{description}</PostDescription>
          <TagGroup tags={processedTags} getSlug={getTagSlug} inline />
        </PostSummary>
      </StyledLink>
    </PostWrapper>
  );
};

const PostWrapper = styled.div`  
  display: flex;  
  flex-direction: column;
  justify-content: flex-end;    
  background-color: white;
  margin-bottom: 1rem;
  border-radius: ${(props): string => props.theme.borderRadius};
  overflow: hidden;
  box-shadow: ${(props): string => props.theme.boxShadow};
  border-radius: ${(props): string => props.theme.borderRadius};
`;

const StyledGatsbyImage = styled(GatsbyImage)`
`;

const PostSummary = styled.div`
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  height: inherit;
`;

const PostTitle = styled.h3`
   margin-top: 0;
   margin-bottom: 0;
`;

const PostDetails = styled.div`
  font-weight: bolder;
  font-size: .8rem;
  color: ${(props): string => props.theme.lightTextColor};
`;

const PostDescription = styled.div`
  font-size: .8rem;  
  margin-bottom: .25rem;
`;
