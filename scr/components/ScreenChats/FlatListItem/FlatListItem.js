import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const returnLastmessage = arrayMessage => {
  const lastMessage = arrayMessage[arrayMessage.length - 1];
  const lastMessageFormated = lastMessage.slice(5);
  return lastMessageFormated;
};
const FlatListItem = ({data}) => {
  // console.log(userMessageBase);
  return (
    <TouchableOpacity style={styles.mainItemView}>
      <View style={styles.imageViewStyle}>
        <Image source={data.avatar} style={styles.imageStyle} />
      </View>
      <View style={styles.textViewStyle}>
        <Text style={styles.textNameStyle}>
          {data.name} {data.surname}
        </Text>
        <Text style={styles.textMessageStyle}>
          {returnLastmessage(data.messages)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainItemView: {
    width: '100%',
    minHeight: 100,
    backgroundColor: '#D6FAFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  imageViewStyle: {marginLeft: '2%'},
  imageStyle: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  textViewStyle: {
    alignSelf: 'flex-start',
    marginHorizontal: '5%',
    width: '80%',
    flexWrap: 'wrap',
  },
  textNameStyle: {
    fontSize: 20,
    color: '#50316D',
  },
  textMessageStyle: {
    fontSize: 16,
    paddingRight:'2%',
    width: '90%',
    flexWrap: 'wrap',
  },
});
export default FlatListItem;
