/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './scr';
import React from 'react';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './scr/config/store';

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
