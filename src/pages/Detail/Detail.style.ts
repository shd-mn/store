import {StyleSheet, Dimensions} from 'react-native';
const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  img_box: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  img: {
    flex: 1,
    width: window.width,
  },
  content_container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  rating: {fontSize: 18},
});
