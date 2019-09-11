import React from 'react';
import { storiesOf } from '@storybook/react';
import FloatingMobileButton from './index';
import { makeProps } from './mock';

storiesOf('FloatingMobileButton', module)
  .add('default', () => (
    <FloatingMobileButton {...makeProps()}>Button</FloatingMobileButton>
  ));
