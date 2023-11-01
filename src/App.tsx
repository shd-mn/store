/**
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
