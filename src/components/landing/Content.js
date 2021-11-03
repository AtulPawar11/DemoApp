/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './Content.styles';
import { useNavigation } from '@react-navigation/native';
import navigationConstants from '../../constants/navigationConstants';
import SearchBar from '../../sharedComponents/SearchBar/SearchBar'
import { useSelector, useDispatch } from 'react-redux';
import { getRepoList } from '../../actions/repoList';

const Content = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {repoList, loaderVisibility} = useSelector(state => state.repoList);

  //... Get the list data from the server.
  useEffect(() => {
      //...API call for fetch data
    dispatch(getRepoList('query'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

   //...Getting data based on user search
   const getSearchResult = async (keyword) => {
    try {
      dispatch(getRepoList(keyword !== '' ? keyword : 'query'));
    } catch (error) {
      console.log(error);
    }
  };

  //...navigating to details screen
  const showDetails = (item) => {
    navigation.navigate(navigationConstants.DETAILS.screenName, item);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        showDetails(item);
      }}>
      <View style={styles.listItem}>
        <Text style={styles.heading}>{item.full_name}</Text>
        {item.language && <Text style={styles.subHeading}> {`Language: ${item.language}`}</Text>}
      </View>
    </TouchableOpacity>
  );

  //... loader for display when fetching data from server
  const loader = () => {
    return <ActivityIndicator color={'red'} size="large" style={styles.loader} />;
  };

  return (
    <View style={styles.container}>
      <SearchBar onChange ={getSearchResult} />
      {!loaderVisibility ? <FlatList
        data={repoList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> : loader()}
    </View>
  );
};

export default Content;
