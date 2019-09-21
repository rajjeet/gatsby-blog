import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import * as theme from '../../utils/theme';
import TagGroup from '../tag-group';
import { getTagSlug } from '../../utils/slugs';
import { TPostProps } from './types';

export const Post: React.FC<TPostProps> = ({ node }) => {
  const { fields, timeToRead, frontmatter } = node;
  const {
    title, tags, image, date, description,
  } = frontmatter;
  const processedTags = tags && tags.map((tag) => ({ fieldValue: tag }));
  return (
    <PostWrapper>
      <StyledLink to={fields.slug}>
        <StyledBackgroundImage fluid={[image.childImageSharp.fluid]}>
          <PostSummary>
            <PostTitle>{title}</PostTitle>
            <PostDetails>{`${date} - ${timeToRead} min read`}</PostDetails>
            <PostDescription>{description}</PostDescription>
            <TagGroup tags={processedTags} getSlug={getTagSlug} inline />
          </PostSummary>
        </StyledBackgroundImage>
      </StyledLink>
    </PostWrapper>
  );
};

const StyledBackgroundImage = styled(BackgroundImage)`
  height: inherit;
  display: flex;  
  flex-direction: column;
  justify-content: flex-end; 
`;

const PostWrapper = styled.div`
  box-shadow: ${theme.hoverBoxShadow};
  background-color: white;
  margin-bottom: 1em;
  display: flex;
  align-items: flex-start;
  height: 300px;  
`;

const PostSummary = styled.div`
  padding: 1em;
  background-color: rgba(0, 0, 0, .7);  
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  height: inherit;
`;

const PostTitle = styled.h3`
   margin-top: 0;
   margin-bottom: 0;
   color: white;
`;

const PostDetails = styled.div`
  color: lightgray;
  font-weight: bolder;
  font-size: .8em;
  margin-bottom: .5em;
`;

const PostDescription = styled.div`
  color: lightgray;
  font-size: .8em;  
  margin-bottom: .5em;
`;
