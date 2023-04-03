/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RootNavigation from './src/RootNavigation';

function App(): JSX.Element {
  return <RootNavigation />;
}

const styles = StyleSheet.create({});

export default App;
