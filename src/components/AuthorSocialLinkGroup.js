import React from 'react';
import styled from 'styled-components';
import {
  faFacebook, faGithub, faLinkedin, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SocialLink from './SocialLink';

const AuthorSocialLinkGroup = ({ className }) => (
  <div className={className}>
    <h4>Links</h4>
    <div>
      <SocialLink name="Email" icon={faEnvelope} link="mailto:rajjeet.phull@gmail.com?subject=Via Ortmesh:" />
      <SocialLink name="GitHub" icon={faGithub} link="https://github.com/rajjeet" />
      <SocialLink name="LinkedIn" icon={faLinkedin} link="https://www.linkedin.com/in/rajjeetphull/" />
      <SocialLink name="Facebook" icon={faFacebook} link="https://www.facebook.com/ortmesh/" />
      <SocialLink name="Twitter" icon={faTwitter} link="https://twitter.com/ortmesh" />
    </div>
  </div>
);

const StyledAuthorSocialLinkGroup = styled(AuthorSocialLinkGroup)`
  h4 {
    margin: 1em auto .25em auto;
  }  
`;

export default StyledAuthorSocialLinkGroup;
