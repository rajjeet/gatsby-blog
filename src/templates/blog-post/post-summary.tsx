import React from 'react';
import styled from 'styled-components';
import { TagGroup } from '../../components/tag-group';
import { getTagSlug } from '../../utils/slugs';
import { TPostSummary } from './types';
import { ShareLinks } from './share-links';
import { theme } from '../../utils/theme';

export const PostSummary: React.FC<TPostSummary> = ({
  title, dateCreated, dateModified, timeToRead, description, tags, url,
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
        <Value>{`${timeToRead} mins`}</Value>
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
    <ShareLinksWrapper>
      <ShareLinks isInline url={url} />
    </ShareLinksWrapper>
  </Wrapper>
);

const ShareLinksWrapper = styled.div`
  display: block;
  @media screen and ${theme.deviceSize.tablet}{
    display: none;
  }
`;

const Description = styled.p`
  color: ${(props): string => props.theme.darkerTextColor};
  font-weight: bolder;
`;

const Detail = styled.div`
  margin-right: .5rem;
`;

const Label = styled.span`
  color: ${(props): string => props.theme.lightTextColor};
  font-weight: bolder;
  :after {
    content: ': '
  }
`;

const Value = styled.span`
 
`;

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

const PostDetails = styled.span`
  font-size: .9rem;    
  display: flex;
  flex-wrap: wrap;
`;

const Header = styled.h1`
  margin-bottom: 0;    
`;
