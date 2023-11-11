/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './pages/Products';
import Detail from './pages/Detail';
import MainProvider from './redux/Provider';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
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
        </Stack.Navigator>
      </NavigationContainer>
    </MainProvider>
  );
}

export default App;
