import React, { memo, useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import moment from 'moment';

type detailsProps = {
  title: string;
  description: string;
  imageURL: string;
  author: string;
  publishedAt: string;
  theme: string;
  onPress?: any;
  content?: string;
  type?: string;
};
export const NewsCard = (props: detailsProps) =>  {
  const { title, description, imageURL, author, publishedAt, theme, onPress, content, type } = props;
  const img = {uri: imageURL};
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={[
            type !== 'fullScreen' && styles.container,
            theme === 'dark' && {backgroundColor: '#000000'},
            type === 'fullScreen' && styles.containerFullScreen
        ]}
    >
      <Image 
        source={img}
        style={styles.image}
      />
      <Text style={[styles.title, theme === 'dark' && {color: '#ECEFF4'}]}>
        {title}
      </Text>
      <Text style={[styles.description, theme === 'dark' && {color: '#ECEFF4'}]}>{description}</Text>
      {content && 
        <Text style={[styles.description, theme === 'dark' && {color: '#ECEFF4'}]}>{content}</Text>
      }
      <View style={[
            type !== 'fullScreen' && styles.footer,
            type === 'fullScreen' && styles.footerFullScreen,
        ]}
       >
        <Text style={styles.footerText}>Created {publishedAt}</Text>
        <Text style={styles.footerText}>Author {author}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default memo(NewsCard);
