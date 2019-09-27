import React from 'react';
import { storiesOf } from '@storybook/react';
import { SocialLink } from './index';
import { makeProps } from './mock';

storiesOf('Social link', module)
  .add('default', () => (
    <SocialLink {...makeProps()} />
  ));
