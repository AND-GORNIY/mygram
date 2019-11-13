//@flow
import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {useLogin} from './useLogin';
import {loginAction} from '../../actions/loginAction';

// eslint-disable-next-line no-shadow
const Login = ({loginAction, isLoading, editableField}) => {
  const {handleInput, onSubmit} = useLogin(loginAction);
  return (
    <ImageBackground
      style={styles.backgroundImageStyle}
      source={require('../../img/Login/Login.jpg')}>
      <View style={styles.loginView}>
        <Text style={styles.textLogo}>Welcome to mygram</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Phone Number"
            style={styles.textInput}
            maxLength={13}
            editable={editableField}
            onChangeText={handleInput('phoneNumber')}
          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry={true}
            maxLength={20}
            editable={editableField}
            onChangeText={handleInput('password')}
          />
          <TouchableOpacity
            style={styles.butonStyle}
            disabled={!editableField}
            onPress={onSubmit}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
        <ActivityIndicator
          size="large"
          animating={isLoading}
          color="#00ff00"
          // style={styles.spiner}
        />
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = store => {
  return {
    editableField: store.userData.editableField,
    isLoading: store.userData.isLoading,
  };
};

const mapDispatchToprops = dispatch => {
  return {
    loginAction: userInfo => dispatch(loginAction(userInfo)),
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToprops)(Login);

export default LoginContainer;

const styles = StyleSheet.create({
  backgroundImageStyle: {
    flex: 1,
  },
  loginView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    color: '#8bf6ff',
    fontSize: 35,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: '#180681',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  textInput: {
    backgroundColor: '#8bf6ff',
    fontSize: 20,
    padding: 5,
    margin: 20,
    width: '80%',
    height: '20%',
    borderRadius: 7,
  },
  inputView: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    margin: 10,
    borderRadius: 5,
  },
  butonStyle: {
    flex: 0.7,
    backgroundColor: '#009adb',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '20%',
    borderRadius: 15,
  },
  buttonText: {
    color: '#8bf6ff',
    fontSize: 35,
  },
  spiner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
