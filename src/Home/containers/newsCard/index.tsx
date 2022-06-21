import React, { memo, useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {View, Image, Text} from 'react-native';
import styles from './style';
import moment from 'moment';

type newsCardProps = {
  title: string;
  description: string;
  imageURL: string;
  author: string;
};
const NewsCard = (props: newsCardProps) =>  {
  const { title, description, imageURL, author } = props;
  const themeData = useSelector((state: any) => state.setting.themeModeReducer);
  const img = {uri: imageURL};
  const [date, setDate] = useState<String>('');
  useEffect(() => {
    const newsDate = '2022-06-20T16:11:26Z';
    const formatedDate = moment(newsDate).format("MMM Do YY");
    setDate(formatedDate);
  }, []);
  return (
    <View style={[styles.container, themeData.data === 'dark' && {backgroundColor: '#000000'}]}>
      <Image 
        source={img}
        style={styles.image}
      />
      <Text style={[styles.title, themeData.data === 'dark' && {color: '#ECEFF4'}]}>
        {title}
      </Text>
      <Text style={[styles.description, themeData.data === 'dark' && {color: '#ECEFF4'}]}>{description}</Text>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Created {date}</Text>
        <Text style={styles.footerText}>Author {author}</Text>
      </View>
    </View>
  );
}
export default memo(NewsCard);