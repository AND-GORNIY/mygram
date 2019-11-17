import React from 'react';
import {
  View,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import FlatListItemOpChat from './FlatListItemOpChat/FlatListItemOpChat';
import {useOpChat} from './useOpenChat';
import {addMessageAction} from '../../actions/addMessageAction';

// eslint-disable-next-line no-shadow
const ScreenOpenChat = ({navigation, userMessageBase, addMessageAction}) => {
  const {neededUser, localState, setLocalState, onSendMessage} = useOpChat(
    userMessageBase,
    navigation.state.params.data,
    addMessageAction,
  );
  return (
    <View style={styles.mainView}>
      <View style={styles.headerStyle}>
        <View>
          <Image style={styles.imageStyle} source={neededUser.avatar} />
        </View>
        <View style={styles.headerTextStyle}>
          <Text style={styles.textStyle}>
            {neededUser.name} {neededUser.surname}
          </Text>
        </View>
      </View>
      <FlatList
        data={neededUser.messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <FlatListItemOpChat messages={item} />}
      />
      <View style={styles.footerStyle}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="type here..."
          onChangeText={setLocalState}
          value={localState}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          onChangeText={setLocalState}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={onSendMessage}>
          <Icon
            style={styles.sendIconStyle}
            name="arrow-up-circle"
            size={55}
            color="#50316D"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#D6FAFF',
  },
  headerStyle: {
    height: '12%',
    minHeight: 60,
    backgroundColor: '#D6FAFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
  headerTextStyle: {
    flex: 1,
  },
  footerStyle: {
    height: '12%',
    minHeight: 60,
    backgroundColor: '#EAE9EF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 70,
    marginHorizontal: '10%',
  },
  textStyle: {
    fontSize: 20,
    color: '#50316D',
  },
  textInputStyle: {
    width: '80%',
    height: 65,
    borderRadius: 200,
    backgroundColor: '#B7ACB6',
    color: '#50316D',
    paddingHorizontal: '5%',
    fontSize: 25,
    marginHorizontal: '1%',
    flexWrap: 'wrap',
  },
  buttonStyle: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    marginHorizontal: '1%',
  },
});

const mapStateToProps = store => {
  return {
    userMessageBase: store.userData.userMessageBase,
  };
};

const mapDispatchToprops = dispatch => {
  return {
    addMessageAction: messageToSend =>
      dispatch(addMessageAction(messageToSend)),
  };
};

const ScreenOpenChatContainer = connect(
  mapStateToProps,
  mapDispatchToprops,
)(ScreenOpenChat);

export default ScreenOpenChatContainer;
