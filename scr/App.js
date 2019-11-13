//@flow
import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import Navigator from './components/Navigator/Navigator';

export const generateKey = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    // eslint-disable-next-line no-bitwise
    let r = (Math.random() * 16) | 0,
      // eslint-disable-next-line no-bitwise
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
const a = () => {
  for (let i = 0; i < 15; i++) {
    console.log(generateKey());
  }
};

const App = () => {
  a();
  return (
    <View style={styles.view}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <Navigator />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#676787',
  },
  safeAreaView: {
    flex: 1,
  },
});

export default App;
