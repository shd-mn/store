/**
 * @format
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from './components/common/Loading';
import ProfileButton from './components/common/ProfileButton';
import Profile from './pages/Profile/Profile';
import {useDispatch, useSelector} from 'react-redux';
import {setSignedIn} from './redux/features/userSlice';

const Stack = createNativeStackNavigator();

function Routes(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const isSignedIn = useSelector((state: any) => state.user.isSignedIn);
  console.log(isSignedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserValue = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user !== null) {
          dispatch(setSignedIn(true));
        }
      } catch (e) {
        // save error
        console.log(`save error ${e}`);
      } finally {
        setIsLoading(false);
      }
    };

    getUserValue();
  }, [dispatch, isSignedIn]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#60a5fa',
          },
          headerTintColor: 'white',
          headerRight: ProfileButton,
        }}>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name="Products"
              component={Products}
              options={{
                title: 'Shop',
              }}
            />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Profile" component={Profile} />
          </>
        ) : (
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{title: 'Login'}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
