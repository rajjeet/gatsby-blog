import React from 'react';
import { storiesOf } from '@storybook/react';
import { faList, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { RoundIconButton } from './index';

storiesOf('RoundIconButton', module)
  .add('default', () => (
    <Container>
      <RoundIconButton icon={faTimes}>Button</RoundIconButton>
      <RoundIconButton icon={faList}>Button</RoundIconButton>
    </Container>
  ));

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
