import * as React from 'react';
import {HomeScreen} from '../Home';
import {SettingScreen} from '../Setting';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'New Feeds' }} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};
export default MainNavigation;
