import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import * as theme from '../../utils/theme';

const SocialLink = ({
  className, link, icon, name,
}) => (
  <span className={className}>
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`See ${name} (opens new tab)`}>
      <FontAwesomeIcon size="2x" icon={icon} />
    </a>
  </span>
);

const StyledSocialLink = styled(SocialLink)`
  margin-right: 1em;
  a {
    vertical-align: center;
    color: ${theme.primaryColor};
    :hover {
      color: ${theme.secondaryColor};
    }
  }
`;

export default StyledSocialLink;
