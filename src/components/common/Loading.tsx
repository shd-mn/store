import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';

function Loading() {
  return (
    <LottieView
      style={styles.container}
      source={require('../../assets/loading.json')}
      autoPlay
      loop
    />
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Loading;
