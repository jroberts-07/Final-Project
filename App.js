import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomePage from './pages/HomePage';
import Details from './pages/Details';
import Contacts from './pages/Contacts';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator stackContentOptions={
        {
          activeBackgroundColor: 'lime',
          activeTintColor: 'magenta',
          inactiveBackgroundColor: 'yellow',
          inactiveTintColor: '#ff0000',
          labelStyle: {
            fontSize: 16,
            fontWeight: 'bold'
          }
        }
      }>
        <Stack.Screen name='HomePage' component={HomePage} options={{title: 'Home', textColor: 'white'}} />
        <Stack.Screen name='Details' component={Details} options={{title: 'Contact Details', textColor: 'white'}} />
        <Stack.Screen name='Contacts' component={Contacts} options={{title: 'Contacts', textColor: 'white'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
