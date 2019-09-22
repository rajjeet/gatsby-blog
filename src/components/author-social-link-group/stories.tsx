import React from 'react';
import { storiesOf } from '@storybook/react';
import { AuthorSocialLinkGroup } from './index';

storiesOf('Author Social Link Group', module)
  .add('default', () => (
    <AuthorSocialLinkGroup />
  ));
