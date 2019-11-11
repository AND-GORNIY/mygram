import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {array} from '../../../img/ImageArray';
import {Actions} from 'react-native-router-flux';

class TabBarIcon extends React.PureComponent {
  render() {
    const {state} = this.props.navigation;
    const activeTabIndex = state.index;
    console.log(activeTabIndex);
    return (
      <View style={styles.tabBarStyle}>
        {state.routes.map((element, index) => {
          return (
            <TouchableOpacity
              key={element.key}
              style={[
                styles.iconStyle,
                activeTabIndex === index ? styles.activeIconStyle : null,
              ]}
              onPress={() => Actions[element.key]()}>
              <Image style={styles.imageStyle} source={array[index]} />
              <Text>{element.key.toUpperCase()}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: 'darkgrey',
    opacity: 1,
    height: '8%',
  },
  iconStyle: {
    alignItems: 'center',
    // backgroundColor: 'ghostwhite',
    width: '24.7%',
  },
  imageStyle: {height: 40, width: 40},
  activeIconStyle: {
    backgroundColor: '#BBE4FF',
    borderRadius: 5,
  },
});
export default TabBarIcon;
