import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import styles from './style';

export const HomeScreen = () =>  {
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorld}>hello world</Text>
    </View>
  );
}
