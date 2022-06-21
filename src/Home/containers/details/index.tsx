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
  const { item, initalUrl } = route.params;
  const themeData = useSelector((state: any) => state.setting.themeModeReducer);
  const newsData = useSelector((state: any) => state.home.newsReducer);
  const [date, setDate] = useState<string>('');
  const [itemParam, setItemParam] = useState<any>(item);
  useEffect(() => {
    const newsDate = itemParam?.publishedAt;
    const formatedDate = moment(newsDate).format("MMM Do YY");
    setDate(formatedDate);
    if(initalUrl) {
      var index = initalUrl?.substring(initalUrl.indexOf("=")+1);
      setItemParam(newsData.data.articles[index]);
    }
  }, []);
  return (
    <>
      {itemParam &&
        <NewsCard 
          title={itemParam?.title}
          description={itemParam?.description}
          imageURL={itemParam?.urlToImage}
          author={itemParam?.author}
          publishedAt={date}
          theme={themeData?.data}
          content={itemParam?.content}
          type={'fullScreen'}
        />
      }
    </>
  );
}
