import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    backgroundColor: '#b0d2fd',
  },
  imageBox: {
    flex: 2,
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    flex: 1,
    width: Dimensions.get('window').width / 2,
  },
  inputContainer: {
    flex: 3,
    gap: 20,
    marginBottom: 20,
  },

  btn: {
    padding: 8,
    backgroundColor: 'aqua',
    color: 'red',
  },
});
