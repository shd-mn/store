import React from 'react';
import {SafeAreaView, View, Image, Button} from 'react-native';
import {Formik} from 'formik';
import styles from './Login.style';
import Input from '../../components/Input';
import {LockIcon, UserIcon} from '../../icons';

function Login() {
  const handleSubmitForm = (value: any) => {
    console.log(value);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={require('../../assets/images/shopping-bag.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleSubmitForm}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.inputContainer}>
            <Input
              placeholder="Username"
              onType={handleChange('username')}
              value={values.username}
              icon={<UserIcon />}
            />
            <Input
              placeholder="Password"
              onType={handleChange('password')}
              value={values.password}
              secureText={true}
              icon={<LockIcon />}
            />
            <Button title="Sign In" onPress={() => handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default Login;
