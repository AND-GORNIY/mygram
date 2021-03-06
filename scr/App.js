//@flow
import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import Navigator from './components/Navigator/Navigator';

const App = () => {
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
    backgroundColor: '#676787',
  },
  safeAreaView: {
    width: '100%',
    height: '100%',
  },
});

export default App;

// export const generateKey = () => {
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//     // eslint-disable-next-line no-bitwise
//     let r = (Math.random() * 16) | 0,
//       // eslint-disable-next-line no-bitwise
//       v = c === 'x' ? r : (r & 0x3) | 0x8;
//     return v.toString(16);
//   });
// };
// const a = () => {
//   for (let i = 0; i < 15; i++) {
//     console.log(generateKey());
//   }
// };
