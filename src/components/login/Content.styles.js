/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop : 50,
    },
    image: {
        marginBottom: 40,
    },
    inputView: {
        borderRadius: 5,
        borderColor : 'gray',
        borderWidth : 1,
        width: '80%',
        height: 45,
        marginBottom: 20,
    },
    textInput: {
        flex: 1,
        padding: 10,
    },
    loginBtn: {
        width: '80%',
        borderRadius: 5,
        height: 50,
        marginTop : 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },
    loginText: {
        color : '#fff',
    },
});
