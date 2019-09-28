import Disqus from 'disqus-react';
import React from 'react';
import styled from 'styled-components';
import { TagGroup } from '../../components/tag-group';
import { getTagSlug } from '../../utils/slugs';
import { TPostSummary } from './types';

export const PostSummary: React.FC<TPostSummary> = ({
  title, dateCreated, timeToRead, disqusConfig, description, tags,
}) => (
  <Wrapper>
    <Header>{title}</Header>
    <PostDetails>
      {`${dateCreated} - ${timeToRead} min read - `}
      <Disqus.CommentCount shortname="ortmesh" config={disqusConfig}>
        Comments
      </Disqus.CommentCount>
    </PostDetails>
    <p>{description}</p>
    {
      tags && (
      <TagGroup
        tags={tags.map((tag) => ({ fieldValue: tag }))}
        getSlug={getTagSlug}
      />
      )
    }
  </Wrapper>
);

const Wrapper = styled.div`

`;

const PostDetails = styled.span`
  font-size: .9em;      
`;

const Header = styled.h1`
  margin-bottom: 0;    
`;
