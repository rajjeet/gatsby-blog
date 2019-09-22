import styled from 'styled-components';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import * as theme from '../../utils/theme';
import { TProps } from './types';

export const WebsiteIdentity: React.FC<TProps> = ({ data }) => (
  <StyledLink to="/" aria-label="See Home">
    <Wrapper>
      <GatsbyImage alt="Ortmesh logo" fluid={data.file.childImageSharp.fluid} style={{ width: '3em' }} />
      <WebsiteHeadingWrapper>
        <Heading>{data.site.siteMetadata.title}</Heading>
        <Caption> Write code that matters </Caption>
      </WebsiteHeadingWrapper>
    </Wrapper>
  </StyledLink>
);

const StyledLink = styled(Link)`
  text-decoration: none;
  text-decoration-color: inherit;  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 190px;
  justify-content: space-between;
`;

const WebsiteHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h2`
  margin: 0;
  color: ${theme.primaryColor}
`;

const Caption = styled.p`
  font-size: 0.8em;
  margin: 0;
  color: ${theme.secondaryColor}
`;
