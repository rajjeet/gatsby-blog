import React from 'react';
import styled from 'styled-components';
import { TagGroup } from '../../components/tag-group';
import { getTagSlug } from '../../utils/slugs';
import { TPostSummary } from './types';

export const PostSummary: React.FC<TPostSummary> = ({
  title, dateCreated, dateModified, timeToRead, description, tags,
}) => (
  <Wrapper>
    <Header>{title}</Header>
    <PostDetails>
      <Detail>
        <Label>Posted</Label>
        <Value>{dateCreated}</Value>
      </Detail>
      <Detail>
        <Label>Read Time</Label>
        <Value>
          {timeToRead}
          {' '}
mins
        </Value>
      </Detail>
      {
          dateModified && (
          <Detail>
            <Label>Updated</Label>
            <Value>{dateModified}</Value>
          </Detail>
          )
        }
    </PostDetails>
    <Description>{description}</Description>
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

const Description = styled.p`
  color: dimgrey;
  font-weight: bolder;
`;

const Detail = styled.div`
  margin-right: .5rem;
`;

const Label = styled.span`
  color: #888888;
  font-weight: bolder;
  :after {
    content: ': '
  }
`;

const Value = styled.span`
 
`;

const Wrapper = styled.div`

`;

const PostDetails = styled.span`
  font-size: .9em;    
  display: flex;
  flex-wrap: wrap;
`;

const Header = styled.h1`
  margin-bottom: 0;    
`;
