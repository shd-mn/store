import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Button,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import {object, string} from 'yup';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/Feather';
import styles from './Login.style';
import Config from 'react-native-config';
import useAuth from '../../auth/useAuth';

type PropTypes = {
  navigation: {
    navigate: (name: string) => void;
  };
};

const URL: string | undefined = Config.API_AUTH_URL;

function Login({navigation}: PropTypes) {
  const [show, setShow] = useState(false);
  const {data, isLoading, error, auth} = useAuth();

  useEffect(() => {
    if (data?.token) {
      navigation.navigate('ProductsPage');
    }
  }, [data?.token, navigation]);

  const handleSubmitForm = async (values: any) => {
    try {
      const schema = object().shape({
        username: string().required('Username is required'),
        password: string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters long'),
      });

      await schema.validate(values);

      auth(`${URL}/login`, values);
    } catch (err: any) {
      Alert.alert('Validation Error', err.message);
    }
  };

  if (error) {
    Alert.alert('Store', error);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => setShow(!show)}>
        <Text>Show</Text>
      </TouchableOpacity>
      {show && (
        <View style={styles.info}>
          <Text style={styles.infoContenet}>username: mor_2314</Text>
          <Text style={styles.infoContenet}>password: 83r5^_</Text>
        </View>
      )}
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={require('../../assets/images/shopping-bag.png')}
          resizeMode="contain"
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
              icon={<Icon name="user" size={20} color="#1f2937" />}
            />
            <Input
              placeholder="Password"
              onType={handleChange('password')}
              value={values.password}
              secureText={true}
              icon={<Icon name="lock" size={20} color="#1f2937" />}
            />
            <Button
              title="Sign In"
              onPress={() => handleSubmit()}
              disabled={isLoading}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default Login;
