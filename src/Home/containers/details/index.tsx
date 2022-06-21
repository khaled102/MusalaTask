import React, { memo, useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {View, Image, Text} from 'react-native';
import styles from './style';
import moment from 'moment';
import {NewsCard} from '../../components';

type newsCardProps = {
  item: any;
  route: any;
};
export const NewsDetails = (props: newsCardProps) =>  {
  const { route } = props;
  const { item } = route.params;
  const themeData = useSelector((state: any) => state.setting.themeModeReducer);
  const [date, setDate] = useState<string>('');
  useEffect(() => {
    const newsDate = '2022-06-20T16:11:26Z';
    const formatedDate = moment(newsDate).format("MMM Do YY");
    setDate(formatedDate);
  }, []);
  return (
    <NewsCard 
      title={item.title}
      description={item.description}
      imageURL={item.urlToImage}
      author={item.author}
      publishedAt={date}
      theme={themeData.data}
      content={item.content}
      type={'fullScreen'}
    />
  );
}
