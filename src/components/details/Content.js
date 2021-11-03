/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, Alert, Image } from 'react-native';
import styles from './Content.styles';
import { useRoute } from '@react-navigation/native';

const Content = () => {
  const { params } = useRoute();
  const stars = (params && params.stargazers_count) ? Number((Number(params.stargazers_count) / 1000).toFixed(1)) : 0;
  //... method for redirect to page.
  const openPage = () => {
    const url = params && params.html_url;
    if (Linking.canOpenURL(url)) {
      Linking.openURL(url);
    } else {
      Alert.alert('Sorry!', 'Unable to open this page');
    }
  };


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{params.full_name}</Text>
          <View style={styles.starView}>
            <Image style={styles.image} source={require('../../assets/images/star.png')} />
            <Text>{`${stars}`}</Text>
          </View>
        </View>
        <Text style={styles.description}>{`Description: ${params.description}`}</Text>
        {params.language && <Text style={styles.description}>{`Language: ${params.language}`}</Text>}
        {params.license && <Text style={styles.description}>{`License: ${params.license.name}`}</Text>}
        <Text style={styles.description}>{`Open Issues: ${params.open_issues}`}</Text>
        <TouchableOpacity
          style={styles.visitPage}
          onPress={openPage}
        >
          <Text style={styles.visitText}>Go to repo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Content;
