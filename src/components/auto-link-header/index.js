import { kebabCase } from 'lodash';
import React from 'react';

const AutoLinkHeader = (headerType) => ({ children }) => {
  const identifier = `${kebabCase(children)}`;
  const Header = `h${headerType}`;
  return (
    <Header id={identifier}>
      {/* eslint-disable-next-line */}
      <a href={identifier} aria-hidden="true" />
      {children}
    </Header>
  );
};

export default AutoLinkHeader;
