import React from 'react';
import styled from 'styled-components';
import {
  faFacebook, faGithub, faLinkedin, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SocialLink } from '../social-link';

export const AuthorSocialLinkGroup: React.FC<{}> = () => (
  <div>
    <Header>Links</Header>
    <LinksWrapper>
      <SocialLink
        name="Email"
        icon={faEnvelope}
        link="mailto:rajjeet.phull@gmail.com?subject=Via Ortmesh:"
        color="gray"
        labelPrefix="See"
      />
      <SocialLink
        name="GitHub"
        icon={faGithub}
        link="https://github.com/rajjeet"
        color="gray"
        labelPrefix="See"
      />
      <SocialLink
        name="LinkedIn"
        icon={faLinkedin}
        link="https://www.linkedin.com/in/rajjeetphull/"
        color="gray"
        labelPrefix="See"
      />
      <SocialLink
        name="Facebook"
        icon={faFacebook}
        link="https://www.facebook.com/ortmesh/"
        color="gray"
        labelPrefix="See"
      />
      <SocialLink
        name="Twitter"
        icon={faTwitter}
        link="https://twitter.com/ortmesh"
        color="gray"
        labelPrefix="See"
      />
    </LinksWrapper>
  </div>
);

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Header = styled.h3`
    margin: 1rem auto .25rem auto;    
`;
