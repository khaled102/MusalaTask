import React, { useCallback, useEffect, useState } from 'react';
import MainNavigation from './screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'
import {news} from '../Home';
import { useDispatch, useSelector } from 'react-redux';
import Storage from '../Util/Storage';
import I18n from 'i18n-js';
import { Appearance, Linking, Button } from 'react-native';
import { themeMode } from '../Setting';
import { NewsDetails } from '../Home';
import { CustomBackButton } from '../Components';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const dispatch = useDispatch();
  const newsData = useSelector((state: any) => state.home.newsReducer);
  const themeData = useSelector((state: any) => state.setting.themeModeReducer);
  const [themeState, setThemeState] = useState(Appearance.getColorScheme());
  const [initalScreen, setInitalScreen] = useState<string | null>(null);
  const [initalUrl, setInitlUrl] = useState<string | null>();
  const language = useCallback(async() => {
    const lang = await Storage.retrieveLanguage();
    if (lang !== 'en') {
      I18n.locale = 'fr';
    }
  }, []); 
  const initialUrl = useCallback(async () => {
    const url = await Linking.getInitialURL();
    setInitlUrl(url);
    if (url) {
      setInitalScreen('Details');
    } else {
      setInitalScreen('Main');
    }
  }, []);
  useEffect(() => {
    dispatch(news());
    language();
  }, []);
  useEffect(() => {
    initialUrl();
    const linkingListener = Linking.addEventListener('url', initialUrl);
    return () => linkingListener.remove();
  }, []);
  useEffect(() => {
    if (themeData?.data) {
      setThemeState(themeData.data);
    }
  }, [themeData]);
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }: any) => {
      setThemeState(colorScheme);
      dispatch(themeMode(colorScheme));
    })
    return () => subscription.remove();
  }, []);
  useEffect(() => {
    if (newsData.data && initalScreen) {
      SplashScreen.hide();
    }
  }, [newsData, initalScreen]);
  return (
    <>
      {!initalScreen || !newsData.data ? <></> :
      <NavigationContainer theme={themeState === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator
          initialRouteName={initalScreen}>
          <Stack.Screen name="Main" component={MainNavigation} options={{headerShown: false}} />
          <Stack.Screen 
            name="Details" 
            component={NewsDetails} 
            options={{ 
              title: I18n.t('Details'),
              headerLeft: () => (
                <CustomBackButton />
              ),
            }}
            initialParams={{ initalUrl: initalUrl}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      }
    </>
  );
};

export default AppNavigation;
