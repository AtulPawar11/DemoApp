/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    inputView: {
        borderRadius: 5,
        borderColor : 'gray',
        borderWidth : 1,
        width: '100%',
        height: 45,
        backgroundColor : '#fff',
        marginBottom: 20,
        justifyContent : 'space-between',
        flexDirection : 'row',
        alignItems : 'center',
    },
    textInput: {
        flex: 1,
        padding: 10,
    },
    image: {
       height : 25,
       resizeMode : 'contain',
    },
});
