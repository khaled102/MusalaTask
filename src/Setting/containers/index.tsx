import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Alert, Switch} from 'react-native';
import styles from './style';
import I18n from '../../Localize/i18n';
import RNRestart from 'react-native-restart';
import Storage from '../../Util/Storage';
import {languages, settingItem, dark} from '../../Constants';
import {themeMode} from '../actions';
import { useDispatch, useSelector } from 'react-redux';

export const SettingScreen = () =>  {
  const [isEnabled, setIsEnabled] = useState(false);
  const dispatch = useDispatch();
  const themeData = useSelector((state: any) => state.setting.themeModeReducer);
  const handleChangeLanguage = () => {
    Alert.alert(I18n.t('changeLanguage'), I18n.t('wantChangeLang'), [
      ...languages
        .filter((lang) => I18n.locale !== lang.code)
        .map((lang) => {
          return {
            text: lang.title,
            onPress: async () => {
              Storage.saveLanguage(lang.code);
              I18n.locale = lang.code;
              RNRestart.Restart();
            },
          };
        }),
      {
        text: I18n.t('Cancel'),
      },
    ]);
  };
  const handleChangeMode = () => {
    dispatch(themeMode(themeData.data === 'dark' ? 'light' : 'dark'));
    setIsEnabled(previousState => !previousState);
  };
  return (
    <View style={[styles.container, themeData.data === 'dark' && {backgroundColor: dark.background}]}>
      {settingItem.map((item, index) => (
        <TouchableOpacity key={index} 
          onPress={item.code === 'lang' ? handleChangeLanguage : () => null}
          style={[
            item.code === 'lang' ? styles.itemCard : styles.toggleCard,
            themeData.data === 'dark' && {backgroundColor: dark.background}
          ]}
        >
          <Text style={[styles.settingItem, themeData.data === 'dark' && {color: dark.text}]}>{I18n.t(item.title)}</Text>
          {item.code === 'mode' && 
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={handleChangeMode}
              value={isEnabled}

            />
          }
        </TouchableOpacity>
      ))}
    </View>
  );
}
