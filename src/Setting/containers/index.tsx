import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
import I18n from '../../Localize/i18n';
import RNRestart from 'react-native-restart';
import Storage from '../../Util/Storage';

export const SettingScreen = () =>  {
  const [languages, setLanguages] = useState<Array<any>>([
    {
      title: 'English',
      code: 'en',
      forceRT: false,
      allowRT: false,
    },
    {
      title: 'Français',
      code: 'fr',
      forceRT: false,
      allowRT: false,
    }]);
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
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleChangeLanguage} style={styles.itemCard}>
        <Text style={styles.settingItem}>{I18n.t('changeLanguage')}</Text>
      </TouchableOpacity>
    </View>
  );
}
