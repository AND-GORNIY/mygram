//@flow
import React from 'react';
// import {StyleSheet} from 'react-native';
import {Router, Scene, Tabs} from 'react-native-router-flux';
import {connect} from 'react-redux';
import ScreenChats from '../ScreenChats';
import ScreenContacts from '../ScreenContacts';
import ScreenProfile from '../ScreenProfile';
import Login from '../Login';
import ScreenSettings from '../ScreenSettings';
import TabBarIcon from './TabBarIcon';
import ScreenOpenChat from '../ScreenOpenChat/ScreenOpenChat';

const Navigator = ({isLogin}) => {
  return (
    <Router>
      <Scene key="root">
        {isLogin ? (
          <Scene hideNavBar={true}>
            <Tabs key="tab" hideNavBar={true} tabBarComponent={TabBarIcon}>
              <Scene
                key="contacts"
                component={ScreenContacts}
                title="contacts"
                hideNavBar={true}
              />
              <Scene
                key="profile"
                component={ScreenProfile}
                title="profile"
                hideNavBar={true}
                intial
                lazy={true}
              />
              <Scene
                key="chats"
                component={ScreenChats}
                title="Chats"
                hideNavBar={true}
                lazy={true}
              />

              <Scene
                key="settings"
                component={ScreenSettings}
                title="settings"
                hideNavBar={true}
                lazy={true}
              />
            </Tabs>
            <Scene key="openChat" component={ScreenOpenChat} title="settings" />
          </Scene>
        ) : (
          <Scene key="login" component={Login} hideNavBar={true}></Scene>
        )}
      </Scene>
    </Router>
  );
};

const mapStateToProps = store => {
  console.log('store', store);
  return {
    isLogin: store.userData.isLogin,
  };
};

// const mapDispatchToprops = dispatch => {
//   return {
//     submCreditCard: userInfo => dispatch(submCreditCard(userInfo)),
//   };
// };

const NavigatorContainer = connect(mapStateToProps)(Navigator);

export default NavigatorContainer;
