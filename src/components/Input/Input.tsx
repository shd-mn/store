import React from 'react';
import {TextInput} from 'react-native';

import styles from './Input.style';

type PropTypes = {
  placeholder: string;
  onType: (name: string) => void;
  value: string;
  secureText?: boolean;
};
function Input({placeholder, onType, value, secureText = false}: PropTypes) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onType}
      value={value}
      secureTextEntry={secureText}
    />
  );
}

export default Input;
