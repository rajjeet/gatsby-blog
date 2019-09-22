import React from 'react';
import { storiesOf } from '@storybook/react';
import { WebsiteIdentity } from './index';
import { makeProps } from './mock';

storiesOf('Website Identity', module)
  .add('default', () => (
    <WebsiteIdentity {...makeProps()} />
  ));
