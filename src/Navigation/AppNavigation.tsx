import React, { useEffect } from 'react';
import MainNavigation from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'
import {news} from '../Home';
import { useDispatch } from 'react-redux';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(news());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={MainNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
