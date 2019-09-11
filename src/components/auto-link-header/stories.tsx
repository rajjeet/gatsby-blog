import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoLinkHeader from './index';

const Header1 = AutoLinkHeader('h1');
const Header2 = AutoLinkHeader('h2');
const Header3 = AutoLinkHeader('h3');
const Header4 = AutoLinkHeader('h4');
const Header5 = AutoLinkHeader('h5');
const Header6 = AutoLinkHeader('h6');

storiesOf('AutoLinkHeader', module)
  .add('default', () => (
    <>
      <Header1>Header h1</Header1>
      <Header2>Header h2</Header2>
      <Header3>Header h3</Header3>
      <Header4>Header h4</Header4>
      <Header5>Header h5</Header5>
      <Header6>Header h6</Header6>
    </>
  ));
