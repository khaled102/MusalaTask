import React, { useCallback, useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {View, Image, Text} from 'react-native';
import styles from './style';
import moment from 'moment';

type newsCardProps = {
  title: string;
  description: string;
  imageURL: string;
};
export const NewsCard = (props: newsCardProps) =>  {
  const { title, description, imageURL } = props;
  const img = {uri: imageURL};
  const [date, setDate] = useState<String>('');
  useEffect(() => {
    const newsDate = '2022-06-20T16:11:26Z';
    const formatedDate = moment(newsDate).format("MMM Do YY");
    setDate(formatedDate);
  }, []);
  return (
    <View style={styles.container}>
      <Image 
        source={img}
        style={styles.image}
      />
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Created {date}</Text>
        <Text style={styles.footerText}>Author Kris Holt</Text>
      </View>
    </View>
  );
}
