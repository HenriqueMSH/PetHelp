import * as React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes'

import './src/utils/i18n'
import { UseTranslation } from "react-i18next";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#294B29"/>
      <Routes/>
    </NavigationContainer>
  );
}