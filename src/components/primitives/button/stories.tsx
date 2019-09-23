import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './index';
import { makeProps } from './mock';

storiesOf('Button', module)
  .add('default', () => (
    <Button {...makeProps()}>Button</Button>
  ));
