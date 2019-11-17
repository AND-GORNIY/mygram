import React from 'react';
import {View, StyleSheet, TextInput, FlatList} from 'react-native';
import {connect} from 'react-redux';
import FlatListItem from './FlatListItemContacts/FlatListItemContacts';
import Icon from 'react-native-vector-icons/Feather';
import {useSearch} from './useSearchContacts';

const ScreenContacts = ({userMessageBase}) => {
  const {setLocalState, filterItem} = useSearch(userMessageBase);
  return (
    <View style={styles.view}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Search"
          placeholderTextColor="#50316D"
          onChangeText={setLocalState}
        />
        <Icon
          style={styles.searchImage}
          name="search"
          size={16}
          color="#50316D"
        />
      </View>

      <FlatList
        data={filterItem()}
        keyExtractor={item => item.key}
        renderItem={({item}) => <FlatListItem data={item} />}
      />
    </View>
  );
};

const mapStateToProps = store => {
  return {
    userMessageBase: store.userData.userMessageBase,
  };
};

const ScreenContactsContainer = connect(mapStateToProps)(ScreenContacts);
export default ScreenContactsContainer;
const styles = StyleSheet.create({
  view: {
    height: '100%',
    backgroundColor: 'darkgrey',
  },
  searchBar: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#D6FAFF',
  },
  textInputStyle: {
    position: 'relative',
    width: '80%',
    height: '60%',
    borderRadius: 200,
    backgroundColor: '#B7ACB6',
    paddingLeft: '12%',
    color: '#50316D',
    fontSize: 16,
  },
  searchImage: {
    position: 'absolute',
    marginLeft: 15,
  },
});
