import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

const onPressProfile = key => {
  return () => {
    Actions.openChat(key);
  };
};

const FlatListItem = ({data}) => {
  return (
    <TouchableOpacity
      style={styles.mainItemView}
      onPress={onPressProfile(data.key)}>
      <View style={styles.imageViewStyle}>
        <Image source={data.avatar} style={styles.imageStyle} />
      </View>
      <View style={styles.textViewStyle}>
        <Text style={styles.textPhoneStyle}>{data.phone}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    width: '80%',
    flexWrap: 'wrap',
  },
  textPhoneStyle: {
    fontSize: 25,
    alignSelf: 'center',
    color: '#50316D',
  },
});
export default FlatListItem;
