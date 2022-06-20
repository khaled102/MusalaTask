import React, { useCallback, useEffect, useState } from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import styles from './style';
import { useSelector, useDispatch } from 'react-redux';
import { NewsCard } from './newsCard';
import { news } from '../actions';

export const HomeScreen = () =>  {
  const dispatch = useDispatch();
  const newsData = useSelector((state: any) => state.home.newsReducer);
  const [refresh, setRefresh] = useState<boolean>(false);
  const renderItem = ({item}: any) => (
    <NewsCard item={item} />
  );
  const handleOnRefresh = useCallback(() => {
    setRefresh(true);
    dispatch(news());
  }, []);
  useEffect(() => {
    setRefresh(false);
  }, []);
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
          refreshControl={
              <RefreshControl 
                refreshing={refresh} 
                onRefresh={handleOnRefresh}
                tintColor="#F8852D"/>
          }
          // onRefresh={() => handleOnRefresh()}
          // refreshing={refresh}
        />
      }
    </View>
  );
}
