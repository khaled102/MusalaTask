/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/Store';
import AppNavigation from './src/Navigation/AppNavigation';

export const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
