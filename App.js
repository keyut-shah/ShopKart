import React from 'react';
import {View , Text} from 'react-native';
import MainRouteConfig from './src/MainRouteconfig';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default app= () =>{
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <MainRouteConfig/>
    </GestureHandlerRootView>

  )
}