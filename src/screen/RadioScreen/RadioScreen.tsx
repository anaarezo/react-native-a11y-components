import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Alert} from 'react-native';
import {Radio} from '../../components/Radio/Radio';

const handleOnPress = (value: string) => {
  Alert.alert('Pressed Radio', value);
};

const mockData = [
  {label: 'Dansk', value: 'da-DK', onPress: handleOnPress},
  {label: 'English', value: 'en-UK', onPress: handleOnPress},
  {label: 'Español', value: 'es-ES', onPress: handleOnPress},
  {label: 'Italiano', value: 'it-IT', onPress: handleOnPress},
  {label: 'Svenska', value: 'sv-SW', onPress: handleOnPress},
];

export const RadioScreen = () => {
  const [selectedItem, setSelectedItem] = useState<string | undefined>();
  const [selectedValueButton, setSelectedValueButton] = useState<string>('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.radio}>
          {/* <RadioGroup
            items={mockData}
            onPress={setSelectedItem}
            selectedValue={selectedItem}
            accessibilityHint="Select a language."
          /> */}
        </View>
        <View style={styles.radio}>
          <Radio
            label="I agree with the terms and conditions"
            accessibilityHint="Double tab to continue."
            value="yes"
            selected={selectedValueButton === 'yes'}
            onPress={(value: string) => setSelectedValueButton(value)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  radio: {
    marginTop: 15,
  },
});
