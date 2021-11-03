/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './SearchBar.styles';


const SearchBar = ({ onChange }) => {
    const [searchKeyword, setSearchKeyword] = useState('');

    //... returning search keyword
    const onEnterSearchQuery = (text) => {
        onChange && onChange(text);
        setSearchKeyword(text);
    };

    //... reseting list
    const clearSearch = () => {
        setSearchKeyword('');
        onChange && onChange('query');
    };

    return (
        <View style={styles.inputView}>
            <TextInput
                style={styles.textInput}
                placeholder="Search"
                placeholderTextColor="#003f5c"
                onChangeText={onEnterSearchQuery}
                value={searchKeyword}
            />
            <TouchableOpacity onPress={clearSearch}>
                {searchKeyword ? <Image style={styles.image} source={require('../../assets/images/close.png')} /> :
                <Image style={styles.image} source={require('../../assets/images/magnify.png')} />}

            </TouchableOpacity>
        </View>
    );
};


export default SearchBar;
