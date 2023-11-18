import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './Input.style';

type PropTypes = {
  placeholder: string;
  onType: (name: string) => void;
  value: string;
  secureText?: boolean;
  icon?: React.JSX.Element;
};
function Input({
  placeholder,
  onType,
  value,
  secureText = false,
  icon,
}: PropTypes) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={secureText}
      />
      {icon && icon}
    </View>
  );
}

export default Input;
