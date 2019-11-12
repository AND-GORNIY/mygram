//@flow
import React from 'react';
// import {StyleSheet} from 'react-native';
import {Router, Scene, Tabs} from 'react-native-router-flux';
import ScreenChat from '../ScreenChat';
import ScreenContacts from '../ScreenContacts';
import ScreenProfile from '../ScreenProfile';
import Login from '../Login';
import ScreenSettings from '../ScreenSettings';
import TabBarIcon from './TabBarIcon';

const Navigator = () => {
  return (
    <Router>
      <Scene key="root">
        {false ? (
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

export default Navigator;

// const styles = StyleSheet.create({
//   view: {
//     backgroundColor: 'black',
//     height: 50,
//   },
//   tabBar: {
//     flexDirection: 'row',
//     borderTopColor: 'darkgrey',
//     backgroundColor: 'ghostwhite',
//     opacity: 1,
//     height: '10%',
//   },
// });
