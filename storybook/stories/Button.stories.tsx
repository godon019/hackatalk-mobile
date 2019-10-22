import Button from '../../src/components/shared/Button';
import { ContainerDeco } from '../decorators';
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #f5fcff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

storiesOf('Button', module).add('default', () => (
  <Container>
    <Button testID={'what'} onPress={(): void => {}}>
      what
    </Button>
  </Container>
));
