import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const FlatListItemOpChat = ({messages}) => {
  return (
    <View
      style={[
        styles.mainItemView,
        messages.sender ? styles.yourMessagestyle : styles.userMessageStyle,
      ]}>
      <Text style={styles.textMessage}>{messages.message}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainItemView: {
    width: '70%',
    minHeight: 20,
    marginVertical: '2%',
    marginHorizontal: '2%',
  },
  textMessage: {
    fontSize: 22,
    padding: '2%',
    marginHorizontal: '4%',
    flexWrap: 'wrap',
  },
  yourMessagestyle: {
    backgroundColor: '#81d4fa',
    alignSelf: 'flex-end',
    borderRadius: 25,
    borderTopRightRadius: 0,
  },
  userMessageStyle: {
    backgroundColor: '#bcbcbc',
    alignSelf: 'flex-start',
    borderRadius: 25,
    borderTopLeftRadius: 0,
  },
});
export default FlatListItemOpChat;
