import React from 'react';
import { storiesOf } from '@storybook/react';
import { RoundIconButton } from './index';
import { makeProps } from './mock';

storiesOf('RoundIconButton', module)
  .add('default', () => (
    <RoundIconButton {...makeProps()}>Button</RoundIconButton>
  ));
