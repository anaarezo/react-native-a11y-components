import React, {useState, useEffect} from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Pressable,
  Text,
} from 'react-native';

export enum testIDComponent {
  Radio = 'radio',
  RadioLabel = 'radio-label',
}

export type RadioProps = {
  accessibilityLabel?: string;
  accessibilityHint?: string;
  disabled?: boolean;
  key?: number;
  label?: string;
  onPress: (value: string) => void;
  selected?: boolean;
  style?: StyleProp<ViewStyle> | undefined;
  testID?: string;
  value: string;
};

export const Radio = ({
  accessibilityLabel,
  accessibilityHint = 'Double tab to select',
  disabled = false,
  label,
  onPress,
  selected,
  style = styles.singleItem,
  value,
}: RadioProps) => {
  const [isSelected, setIsSelected] = useState(selected);

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  const handleOnPress = () => {
    if (onPress) {
      onPress(value);
      setIsSelected(true);
    }
  };

  const selectedStyle = {
    borderColor: isSelected ? 'red' : 'white',
  };

  return (
    <Pressable
      accessible={true}
      accessibilityLabel={`${label || ''}. ${accessibilityLabel || ''}`}
      accessibilityHint={`${!selected ? accessibilityHint : ''}`}
      role="radio"
      accessibilityState={{selected, disabled}}
      disabled={disabled}
      onPress={handleOnPress}
      style={[styles.container, style, disabled && styles.disabled]}
      testID={testIDComponent.Radio}>
      <View style={[styles.outerCircle, selectedStyle]}>
        {selected ? <View style={styles.innerCircle} /> : null}
      </View>
      {label ? <Text testID={testIDComponent.RadioLabel}>{label}</Text> : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 2,
    gap: 8,
  },
  outerCircle: {
    width: 10,
    height: 10,
    borderWidth: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  singleItem: {
    borderRadius: 8,
    marginBottom: 0,
  },
  disabled: {
    opacity: 0.5,
  },
});
