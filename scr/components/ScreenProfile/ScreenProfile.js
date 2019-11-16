import React from 'react';
import {View, StyleSheet, Image, TextInput, Text} from 'react-native';
import {connect} from 'react-redux';
import {profileAction} from '../../actions/profileAction';
import {useScreenProfile} from './useScreenProfile';

const ScreenProfile = ({avatar, name, surname, bio, age, profileAction}) => {
  console.log(profileAction);
  const {handleInput, onUnFocus, localState} = useScreenProfile(
    name,
    surname,
    bio,
    age,
    profileAction,
  );
  console.log(localState);
  return (
    <View style={styles.viewScreen}>
      <View style={styles.viewMaininfo}>
        <Image style={styles.imageStyle} source={avatar} />
        <View>
          <TextInput
            style={styles.textStyle}
            placeholder="name"
            value={localState.name}
            onChangeText={handleInput('name')}
            onEndEditing={onUnFocus('name')}
          />
          <Text> Click for change yor name</Text>
          <TextInput
            style={styles.textStyle}
            placeholder="surname"
            value={localState.surname}
            onChangeText={handleInput('surname')}
            onEndEditing={onUnFocus('surname')}
          />
          <Text> Click for change yor surname</Text>
        </View>
      </View>
      <View style={styles.secondaryStyle}>
        <TextInput
          style={styles.textStyle}
          placeholder="age"
          value={localState.age}
          onChangeText={handleInput('age')}
          onEndEditing={onUnFocus('age')}
        />
        <Text> Input your age</Text>
        <TextInput
          style={styles.textStyle}
          placeholder="bio"
          value={localState.bio}
          onChangeText={handleInput('bio')}
          onEndEditing={onUnFocus('bio')}
        />
        <Text> Click for input brief informtion about yourself</Text>
      </View>
    </View>
  );
};

const mapStateToProps = store => {
  return {
    avatar: store.userData.userInfo.avatar,
    name: store.userData.userInfo.name,
    surname: store.userData.userInfo.surname,
    age: store.userData.userInfo.age,
    bio: store.userData.userInfo.bio,
  };
};

const mapDispatchToprops = dispatch => {
  return {
    profileAction: userInfo => dispatch(profileAction(userInfo)),
  };
};

const ScreenProfileContainer = connect(
  mapStateToProps,
  mapDispatchToprops,
)(ScreenProfile);

export default ScreenProfileContainer;

const styles = StyleSheet.create({
  viewScreen: {
    height: '100%',
    backgroundColor: '#D6FAFF',
  },
  imageStyle: {
    margin: 10,
    width: 120,
    height: 120,
    margin: 15,
    borderRadius: 150,
  },
  viewMaininfo: {
    height: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 3,
    borderColor: '#ECE9FD',
  },
  mainTextStyle: {},

  secondaryStyle: {
    margin: 5,
    borderBottomWidth: 3,
    borderColor: '#ECE9FD',
  },
  textStyle: {
    fontSize: 25,
  },
});
