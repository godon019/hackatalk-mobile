import React, { ReactElement } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';

import { StateProvider } from '../src/contexts/index';
import { ThemeType } from '../src/types';
import { createTheme } from '../src/theme';

const Container = styled.View`
  flex: 1;
  background-color: #f5fcff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ContainerDeco = (storyFn): ReactElement => (
  <Container>{storyFn()}</Container>
);

export const ProviderDeco = (storyFn): ReactElement => (
  <ThemeProvider theme={createTheme(ThemeType.LIGHT)}>
    {storyFn()}
  </ThemeProvider>
);

// it doesn't work. need to analyze `StateProvider`
export const ProviderDeco2 = (storyFn): ReactElement => (
  <StateProvider>{storyFn()}</StateProvider>
);
