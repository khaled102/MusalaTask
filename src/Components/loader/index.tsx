import Spinner from 'react-native-loading-spinner-overlay';
import React from 'react';
import styles from './style';

type loaderProps = {
  status: boolean,
};
export const Loader = (props: loaderProps) => {
  return (
    <Spinner
      visible={props.status}
      textContent={'Loading...'}
      textStyle={styles.spinnerTextStyle}
    />
  );
};
