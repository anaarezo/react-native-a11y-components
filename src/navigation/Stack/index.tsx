import React from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, RadioGroupScreen, RadioScreen} from '../../screen';
import {BottomTabs} from '../BottomTabs';

const Stack = createNativeStackNavigator();

export const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Radio" component={RadioScreen} />
      <Stack.Screen name="RadioGroup" component={RadioGroupScreen} />
    </Stack.Navigator>
  );
};
