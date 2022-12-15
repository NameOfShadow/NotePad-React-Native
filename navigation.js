import React from 'react';
import Loader from "./components/Loader"
import Main from "./components/Main"

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigate() {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Loader" component={Loader}/>
      <Stack.Screen name="Main" component={Main}/>
    </Stack.Navigator>
  </NavigationContainer>
}
