import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

export type TProps = {
  icon: IconProp;
} & React.HTMLProps<HTMLButtonElement>
