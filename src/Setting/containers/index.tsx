import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

export const SettingScreen = () =>  {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleChangeLanguage} style={styles.itemCard}>
        <Text style={styles.settingItem}>Change language</Text>
      </TouchableOpacity>
    </View>
  );
}
