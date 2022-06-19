import React from 'react';
import MainNavigation from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={MainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
