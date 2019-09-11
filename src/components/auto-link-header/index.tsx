import { kebabCase } from 'lodash';
import React from 'react';

type TProps = {
  children: string;
}

const AutoLinkHeader = (HeaderTag) => ({ children }: TProps) => {
  const identifier = `${kebabCase(children)}`;
  return (
    <HeaderTag id={identifier}>
      {/* eslint-disable-next-line */}
      <a href={identifier} aria-hidden="true" />
      {children}
    </HeaderTag>
  );
};

export default AutoLinkHeader;
