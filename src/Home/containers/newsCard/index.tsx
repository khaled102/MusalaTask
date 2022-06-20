import React, { useCallback, useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {View, Image, Text} from 'react-native';
import styles from './style';
import moment from 'moment';

type newsCardProps = {
  item?: any;
};
export const NewsCard = (props: newsCardProps) =>  {
  const { item } = props;
  const img = {uri: "https://s.yimg.com/os/creatr-uploaded-images/2021-05/a8217250-bdfa-11eb-bfc4-2663225cea83"};
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
        New York passes a bill to limit bitcoin mining
      </Text>
      <Text style={styles.description}>
      New York lawmakers have passed a bill
      that would temporarily ban new bitcoin
      mining operations. Early on Friday, state senators voted 36-27 to pass the legislation. It's now bound for the desk of Governor Kathy Hochul, who will sign it into law or veto th…
      </Text>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Created {date}</Text>
        <Text style={styles.footerText}>Author Kris Holt</Text>
      </View>
    </View>
  );
}
