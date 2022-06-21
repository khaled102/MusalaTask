import React, { useCallback, useEffect } from 'react';
import MainNavigation from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'
import {news} from '../Home';
import { useDispatch, useSelector, useStore } from 'react-redux';
import Storage from '../Util/Storage';
import I18n from 'react-native-i18n';


const Stack = createNativeStackNavigator();

const AppNavigation = (props: any) => {
  const dispatch = useDispatch();
  const newsData = useSelector((state: any) => state.home.newsReducer)
  const language = useCallback(async() => {
    const lang = await Storage.retrieveLanguage();
    if (lang !== 'en') {
      I18n.locale = 'fr';
    }
  }, []); 
  useEffect(() => {
    language();
    dispatch(news());
  }, []);
  useEffect(() => {
    if (newsData.data) {
      SplashScreen.hide();
    }
  }, [newsData]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={MainNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
