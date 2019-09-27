import React from 'react';
import { kebabCase } from 'lodash';
import { TProps } from './types';

export const AutoLinkHeader = (HeaderTag): React.FC<TProps> => ({ children }): JSX.Element => {
  const identifier = `${kebabCase(children)}`;
  return (
    <HeaderTag id={identifier}>
      {/* eslint-disable-next-line */}
      <a href={identifier} aria-hidden="true" />
      {children}
    </HeaderTag>
  );
};
