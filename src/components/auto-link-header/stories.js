import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoLinkHeader from './index';

const Header1 = AutoLinkHeader(1);
const Header2 = AutoLinkHeader(2);
const Header3 = AutoLinkHeader(3);
const Header4 = AutoLinkHeader(4);
const Header5 = AutoLinkHeader(5);
const Header6 = AutoLinkHeader(6);

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
