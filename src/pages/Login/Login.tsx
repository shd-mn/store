import React from 'react';
import {SafeAreaView, View, Button} from 'react-native';

import styles from './Login.style';
import Input from '../../components/Input';

function Login() {
  const onChange = () => {};
  const handleSubmit = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Input placeholder="Username" onType={onChange} />
        <Input placeholder="Pasword" onType={onChange} />
      </View>
      <View>
        <Button title="Sign In" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}

export default Login;
