import React, { useEffect } from 'react';
import MainNavigation from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'
import {news} from '../Home';
import { useDispatch, useSelector, useStore } from 'react-redux';


const Stack = createNativeStackNavigator();

const AppNavigation = (props: any) => {
  const dispatch = useDispatch();
  const newsData = useSelector((state: any) => state.home.newsReducer)
  useEffect(() => {
    dispatch(news());
  }, []);
  useEffect(() => {
    if (newsData) {
      SplashScreen.hide();
    }
  }, [newsData]);
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
