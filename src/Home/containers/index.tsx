import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './style';
import { useSelector } from 'react-redux';
import { NewsCard } from './newsCard';

export const HomeScreen = () =>  {
  const newsData = useSelector((state: any) => state.home.newsReducer);
  const renderItem = ({item}: any) => (
    <NewsCard item={item} />
  );
  return (
    <View style={styles.container}>
      {newsData?.data &&
        <FlatList
          horizontal={false}
          data={newsData.data.articles} 
          renderItem={renderItem}
          directionalLockEnabled
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
      }
    </View>
  );
}
