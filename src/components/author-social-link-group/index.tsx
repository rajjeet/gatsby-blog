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
    <div>
      <SocialLink name="Email" icon={faEnvelope} link="mailto:rajjeet.phull@gmail.com?subject=Via Ortmesh:" />
      <SocialLink name="GitHub" icon={faGithub} link="https://github.com/rajjeet" />
      <SocialLink name="LinkedIn" icon={faLinkedin} link="https://www.linkedin.com/in/rajjeetphull/" />
      <SocialLink name="Facebook" icon={faFacebook} link="https://www.facebook.com/ortmesh/" />
      <SocialLink name="Twitter" icon={faTwitter} link="https://twitter.com/ortmesh" />
    </div>
  </div>
);

const Header = styled.h3`
    margin: 1em auto .25em auto;    
`;
