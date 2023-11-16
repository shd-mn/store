import React from 'react';
import {SafeAreaView, View, Button, Image} from 'react-native';

import styles from './Login.style';
import Input from '../../components/Input';

function Login() {
  const onChange = () => {};
  const handleSubmit = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={require('../../assets/images/shopping-bag.png')}
          alt="logo"
        />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Username" onType={onChange} />
        <Input placeholder="Pasword" onType={onChange} />
        <Button title="Sign In" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}

export default Login;
