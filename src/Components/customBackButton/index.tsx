import React, {useCallback, useState} from 'react';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

type Nav = {
  navigate: (value: string) => void;
}
export const CustomBackButton = () => {
  const { navigate }  = useNavigation<Nav>();
  const handleGoBack = useCallback(() => {
    navigate('Main');
  }, []);
  return (
    <Icon
      name='chevron-back-outline'
      type='ionicon'
      color='#000'
      size={28}
      onPress={() => handleGoBack()}
    />
  );
};
