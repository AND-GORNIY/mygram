//@flow
import React from 'react';
// import {StyleSheet} from 'react-native';
import {Router, Scene, Tabs} from 'react-native-router-flux';
import {connect} from 'react-redux';
import ScreenChat from '../ScreenChat';
import ScreenContacts from '../ScreenContacts';
import ScreenProfile from '../ScreenProfile';
import Login from '../Login';
import ScreenSettings from '../ScreenSettings';
import TabBarIcon from './TabBarIcon';

const Navigator = ({isLogin}) => {
  console.log('privet', isLogin);
  return (
    <Router>
      <Scene key="root">
        {isLogin ? (
          <Tabs key="tab" hideNavBar={true} tabBarComponent={TabBarIcon}>
            <Scene
              key="contacts"
              component={ScreenContacts}
              title="contacts"
              hideNavBar={true}
              lazy={true}
              image={'../img/ContactsImage.png'}
            />
            <Scene
              key="profile"
              component={ScreenProfile}
              title="profile"
              hideNavBar={true}
              intial
              lazy={true}
              image={'../img/ProfileImage.png'}
            />
            <Scene
              key="chat"
              component={ScreenChat}
              title="Chat"
              hideNavBar={true}
              lazy={true}
              image={'../img/ChatsImage.png'}
            />
            <Scene
              key="settings"
              component={ScreenSettings}
              title="settings"
              hideNavBar={true}
              lazy={true}
              image={'../img/ContactsImage.png'}
            />
          </Tabs>
        ) : (
          <Scene key="login" component={Login} hideNavBar={true} />
        )}
      </Scene>
    </Router>
  );
};

const mapStateToProps = store => {
  console.log(store);
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
