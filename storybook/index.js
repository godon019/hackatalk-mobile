import './rn-addons';

import { ProviderDeco, ProviderDeco2 } from './decorators';
import {
  addDecorator,
  configure,
  getStorybookUI,
} from '@storybook/react-native';

// import stories
configure(() => {
  require('./stories');
}, module);

// eslint-disable-next-line max-len
// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({ port: 7007, host: 'localhost' });

addDecorator(ProviderDeco);

export default StorybookUIRoot;
