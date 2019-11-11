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
    flex: 1,
    backgroundColor: '#676787',
  },
  safeAreaView: {
    flex: 1,
  },
});

export default App;
