import * as React from 'react';
import {HomeScreen} from '../Home';
import {SettingScreen} from '../Setting';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import I18n from 'i18n-js';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 15
        },
        tabBarIconStyle: { display: "none" },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          title: I18n.t('newsFeed') ,
        }} 
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingScreen} 
        options={{ 
          title: I18n.t('settings'),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainNavigation;
