/**
 * @format
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './pages/Products';
import Detail from './pages/Detail';
import MainProvider from './redux/Provider';
import Login from './pages/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [isSignedIn, setIsSignedIn] = useState(true);

  useEffect(() => {
    const getUserValue = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        setIsSignedIn(user !== undefined);
      } catch (e) {
        // save error
        console.log(`save error ${e}`);
      }
    };

    getUserValue();
  }, []);

  return (
    <MainProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#60a5fa',
            },
            headerTintColor: 'white',
          }}>
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="ProductsPage"
                component={Products}
                options={{
                  title: 'Shop',
                }}
              />
              <Stack.Screen
                name="DetailPage"
                component={Detail}
                options={{
                  title: 'Detail',
                }}
              />
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
    </MainProvider>
  );
}

export default App;
