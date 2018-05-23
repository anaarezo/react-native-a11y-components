import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';

interface IHomeScreen {
  navigation: any;
}

export const HomeScreen = ({navigation}: IHomeScreen) => {
  const handleOnPress = () => {
    navigation.navigate('Radio');
  };

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Pressable onPress={handleOnPress}>
        <Text>Radio</Text>
      </Pressable>
      <Pressable onPress={handleOnPress}>
        <Text>RadioGroup</Text>
      </Pressable>
    </SafeAreaView>
  );
};
