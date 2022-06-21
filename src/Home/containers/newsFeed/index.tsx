import React, { useCallback, useEffect, useState, useMemo } from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import styles from './style';
import { useSelector, useDispatch } from 'react-redux';
import {NewsCard} from '../../components';
import { news } from '../../actions';
import { SearchComponent } from '../../../Components';
import moment from 'moment';

export const HomeScreen = (props: any) =>  {
  const {navigation} = props;
  const dispatch = useDispatch();
  const newsData = useSelector((state: any) => state.home.newsReducer);
  const searchData = useSelector((state: any) => state.home.searchingReducer);
  const themeData = useSelector((state: any) => state.setting.themeModeReducer);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [newsFeed, setNewsFeed] = useState<Array<any>>([]);
  const handleNavToDetails = (item: any) => {
    navigation.navigate('Details', {item: item});
  };
  const renderItem = ({item}: any) => {
    const newsDate = item.publishedAt;
    const formatedDate = moment(newsDate).format("MMM Do YY");
    return (
      <NewsCard 
        title={item.title}
        description={item.description}
        imageURL={item.urlToImage}
        author={item.author}
        publishedAt={formatedDate}
        theme={themeData.data}
        onPress={() => handleNavToDetails(item)}
      />
    )
  };
  const handleOnRefresh = useCallback(() => {
    dispatch(news());
  }, []);
  useEffect(() => {
    if (newsData.loading) {
      setRefresh(true);
    } else {
      setRefresh(false);
      setNewsFeed(newsData?.data?.articles);
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
