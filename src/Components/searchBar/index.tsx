import React, {useCallback, useState} from 'react';
import styles from './style';
import { SearchBar } from "@rneui/themed";
import I18n from 'i18n-js';
import {searching} from '../../Home';
import { useDispatch } from 'react-redux';

export const SearchComponent = () => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch();
  const updateSearch = useCallback((val: string) => {
    setSearch(val)
    dispatch(searching(val));
  }, []);
  return (
    <SearchBar
      placeholder={I18n.t('searchPlaceHolder')}
      onChangeText={updateSearch}
      value={search}
      containerStyle={styles.searchContainer}
      inputContainerStyle={styles.inputContainer}
    />
  );
};
