/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen from './Navigation/BottomTab/Screen';
import Detail_Product from './screens/Screen/Detail_Product';
import {RegisterScreen, LoginScreen, FogotPassScreen} from './screens/auth/index';

const Stack = createNativeStackNavigator();


const App = () => {

  return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="homebase"
          component={TabScreen}
          options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Forgot" component={FogotPassScreen} />
        <Stack.Screen name="Details" component={Detail_Product} />
    </Stack.Navigator>
   </NavigationContainer>
  );
};

export default App;
