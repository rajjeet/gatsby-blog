import React from 'react';
import { storiesOf } from '@storybook/react';
import { TagListing } from './index';

storiesOf('Tag Listing', module)
  .add('default', () => (
    <TagListing />
  ));
