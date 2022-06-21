import React, { useCallback, useEffect, useState, useMemo } from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import styles from './style';
import { useSelector, useDispatch } from 'react-redux';
import NewsCard from './newsCard';
import { news } from '../actions';
import { SearchComponent } from '../../Components';

export const HomeScreen = () =>  {
  const dispatch = useDispatch();
  const newsData = useSelector((state: any) => state.home.newsReducer);
  const searchData = useSelector((state: any) => state.home.searchingReducer);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [newsFeed, setNewsFeed] = useState<Array<any>>([]);

  const renderItem = ({item}: any) => (
    <NewsCard 
      title={item.title}
      description={item.description}
      imageURL={item.urlToImage}
      author={item.author}
    />
  );
  const handleOnRefresh = useCallback(() => {
    dispatch(news());
  }, []);
  useEffect(() => {
    if (newsData.loading) {
      setRefresh(true);
    } else {
      setRefresh(false);
      setNewsFeed(newsData?.data?.articles);
      console.log('sss')
    }
  }, [newsData]);
  useEffect(() => {
    if (searchData.data) {
      const Data: Array<any> = newsData?.data?.articles;
      let filter = Data.filter((item: any) => item?.title?.includes(searchData.data));
      if(filter.length === 0) {
        filter = Data.filter((item: any) => item?.description?.includes(searchData.data));
      }
      if(filter.length === 0) {
        filter = Data.filter((item: any) => item?.publishedAt?.includes(searchData.data));
      }
      if(filter.length === 0) {
        filter = Data.filter((item: any) => item?.author?.includes(searchData.data));
      }
      setNewsFeed(filter);
    } else if (!searchData.data) {
      setNewsFeed(newsData?.data?.articles);
    }
  }, [searchData]);
  return (
    <View style={styles.container}>
      <SearchComponent />
      {newsFeed &&
        <FlatList
          data={newsFeed} 
          renderItem={renderItem}
          directionalLockEnabled
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl 
              refreshing={refresh} 
              onRefresh={handleOnRefresh}
              tintColor="#F8852D"
            />
          }
        />
      }
    </View>
  );
}
