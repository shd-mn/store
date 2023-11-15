import React from 'react';
import {TextInput} from 'react-native';

import styles from './Input.style';

type PropTypes = {
  placeholder: string;
  onType: () => void;
};
function Input({placeholder, onType}: PropTypes) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onType}
    />
  );
}

export default Input;
