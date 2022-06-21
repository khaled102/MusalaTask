import React, { useCallback, useEffect, useState } from 'react';
import MainNavigation from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'
import {news} from '../Home';
import { useDispatch, useSelector } from 'react-redux';
import Storage from '../Util/Storage';
import I18n from 'react-native-i18n';
import { Appearance } from 'react-native';
import { themeMode } from '../Setting';


const Stack = createNativeStackNavigator();

const AppNavigation = (props: any) => {
  const dispatch = useDispatch();
  const newsData = useSelector((state: any) => state.home.newsReducer);
  const themeData = useSelector((state: any) => state.setting.themeModeReducer);
  const [themeState, setThemeState] = useState(Appearance.getColorScheme());
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
  useEffect(() => {
    if (themeData?.data) {
      setThemeState(themeData.data);
    }
  }, [themeData]);
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }: any) => {
      console.log(colorScheme);
      setThemeState(colorScheme);
      dispatch(themeMode(colorScheme));
    })
    return () => subscription.remove();
  }, [])
  return (
    <NavigationContainer theme={themeState === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={MainNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
