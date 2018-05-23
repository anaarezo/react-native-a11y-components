import React from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RadioGroupScreen, RadioScreen, HomeScreen} from '../../screen';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Home',

          // tabBarIcon: () => <Icon name="home" size={25} color="#666666" />,
        }}
      />
      <Tab.Screen
        name="RadioScreen"
        component={RadioScreen}
        options={{
          title: 'RadioScreen',

          // tabBarIcon: () => (
          //   <Icon name="map-marker" size={25} color="#666666" />
          // ),
        }}
      />
      <Tab.Screen
        name="RadioGroupScreen"
        component={RadioGroupScreen}
        options={{
          title: 'RadioGroupScreen',

          // tabBarIcon: () => (
          //   <Icon name="map-marker" size={25} color="#666666" />
          // ),
        }}
      />
    </Tab.Navigator>
  );
};
