import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {logOutAction} from '../../actions/logOutAction';
import {connect} from 'react-redux';
const ScreenSettings = ({onLogOut}) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.butonStyle} onPress={onLogOut}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => {
      dispatch(logOutAction());
    },
  };
};
const ScreenSettingsContainer = connect(
  null,
  mapDispatchToProps,
)(ScreenSettings);

export default ScreenSettingsContainer;

const styles = StyleSheet.create({
  view: {
    height: '100%',
    backgroundColor: '#D6FAFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  butonStyle: {
    backgroundColor: '#009adb',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: '15%',
    borderRadius: 20,
  },
  buttonText: {
    color: '#8bf6ff',
    fontSize: 35,
  },
});
