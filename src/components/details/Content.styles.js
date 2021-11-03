/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'lightgray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    margin: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection : 'row',
    justifyContent : 'space-between',
    width : '100%',
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
    marginTop: 10,
    fontSize: 15,
  },

  visitPage: {
    borderRadius: 5,
    padding: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    alignSelf: 'flex-end',
  },
  visitText: {
    color: '#fff',
  },
  starView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'center',
  },
  image: {
    height: 20,
    resizeMode: 'contain',
  },
});
