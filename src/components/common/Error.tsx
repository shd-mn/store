import React from 'react';
import LottieView from 'lottie-react-native';
import {View, Text, StyleSheet} from 'react-native';

function Error({error}: {error: any}) {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.icon}
        source={require('../../assets/error.json')}
        autoPlay
        loop
      />
      <Text style={styles.errorMsg}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMsg: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Error;
