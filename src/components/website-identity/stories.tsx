import React from 'react';
import { storiesOf } from '@storybook/react';
import { WebsiteIdentity } from './index';

storiesOf('Website Identity', module)
  .add('default', () => (
    <WebsiteIdentity />
  ));
