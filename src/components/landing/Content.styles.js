/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding : 15,
        flex : 1,
    },
    listItem: {
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: 'lightgray',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        marginTop: 6,
        marginBottom: 6,
        padding : 15,
      },
      heading: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      subHeading: {
        color: 'gray',
        marginTop : 10,
        fontSize: 15,
      },
      loader: {
        flex: 1,
        alignSelf: 'center',
    },
});
