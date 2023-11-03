import {StyleSheet} from 'react-native';
const borderR = 5;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
  },
  image: {width: 100, minHeight: 100, backgroundColor: '#fff'},
  body_container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: borderR,
    paddingRight: borderR,
    borderRadius: borderR,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
