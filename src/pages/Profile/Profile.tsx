import React, {useCallback, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setSignedIn, setUser} from '../../redux/features/userSlice';
import useFetchUser from '../../hooks/useFetchUser';
import Config from 'react-native-config';
import {RootState} from '../../redux/store';
import Loading from '../../components/common/Loading';

const URL: string | undefined = Config.API_URL;
function Profile() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {user} = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const {data, fetchUsers} = useFetchUser();
  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem('user');
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setSignedIn(false));
    }
  };

  const getUserValue = useCallback(async () => {
    try {
      const userInfo = await AsyncStorage.getItem('user');
      if (userInfo && data) {
        const parse = await JSON.parse(userInfo);
        const selectedUser = data.find(
          item =>
            item.username === parse.username &&
            item.password === parse.password,
        );
        if (selectedUser) {
          dispatch(setUser(selectedUser));
        }
      }
    } catch (e) {
      // save error
      console.log(`save error ${e}`);
    } finally {
      setIsLoading(false);
    }
  }, [data, dispatch]);

  useEffect(() => {
    getUserValue();
  }, [data, getUserValue]);

  useEffect(() => {
    fetchUsers(`${URL}/users`);
  }, [fetchUsers]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <Text>{user?.name?.firstname}</Text>
      <Button title="sign out" onPress={handleSignOut} />
    </View>
  );
}

export default Profile;
