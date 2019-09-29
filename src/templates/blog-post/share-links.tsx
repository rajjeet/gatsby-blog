import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  RedditShareButton,
  EmailShareButton,
} from 'react-share';
import styled from 'styled-components';
import {
  faFacebook, faReddit, faLinkedin, faTwitter, faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { SocialLink } from '../../components/social-link';
import * as theme from '../../utils/theme';

const socialMediaLinks = [
  { Component: FacebookShareButton, name: 'Facebook', icon: faFacebook },
  { Component: TwitterShareButton, name: 'Twitter', icon: faTwitter },
  { Component: WhatsappShareButton, name: 'WhatsApp', icon: faWhatsapp },
  { Component: LinkedinShareButton, name: 'LinkedIn', icon: faLinkedin },
  { Component: RedditShareButton, name: 'Reddit', icon: faReddit },
  { Component: EmailShareButton, name: 'Email', icon: faEnvelopeSquare },
];

type TProps = {
  isInline?: boolean;
  url: string;
}

export const ShareLinks: React.FC<TProps> = ({ isInline, url }) => (
  <Wrapper>
    <StickyContainer isInline={isInline}>
      {
          isInline ? <InlineHeader>Share</InlineHeader> : <Header>Share</Header>
        }
      <LinksWrapper isInline={isInline}>
        {
            socialMediaLinks.map(({ Component, name, icon }) => (
              <ShareButtonWrapper key={name} isInline={isInline}>
                <Component url={url}>
                  <SocialLink icon={icon} name={name} color={theme.primaryColor} labelPrefix="Share this post on" />
                </Component>
              </ShareButtonWrapper>
            ))
          }
      </LinksWrapper>
    </StickyContainer>
  </Wrapper>
);

const Header = styled.h4`
`;

const InlineHeader = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;

const ShareButtonWrapper = styled.div`
  margin-bottom: ${(props): string => (props.isInline ? '0' : '1em')};
  margin-right: ${(props): string => (props.isInline ? '.5em' : '0')}
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: ${(props): string => (props.isInline ? 'row' : 'column')};
  align-items: center;
  justify-content: ${(props): string => (props.isInline ? 'flex-start' : 'space-between')};  
`;

const StickyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props): string => (props.isInline ? 'row' : 'column')};
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 1em 1em 1em 0;
  position: sticky;
  top: 1em;
`;
