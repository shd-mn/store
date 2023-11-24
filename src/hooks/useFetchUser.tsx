import {useState} from 'react';
import axios from 'axios';
import {UserTypes} from '../pages/Products/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthData = {
  username: string;
  password: string;
};
function useFetchUser() {
  const [data, setData] = useState<UserTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUsers = async (URL: string | any, values: AuthData) => {
    try {
      const respone = await axios<UserTypes[]>(URL);
      if (respone.data) {
        const user = respone?.data.filter(
          item =>
            item.username === values.username &&
            item.password === values.password,
        );
        setData(user);
        await AsyncStorage.setItem('user', JSON.stringify(user));
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {data, isLoading, error, fetchUsers};
}

export default useFetchUser;
