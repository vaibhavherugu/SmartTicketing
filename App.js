import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import mainScreen from './src/components/mainScreen';
import {createStackNavigator} from '@react-navigation/stack'
import login from './src/components/login';
import register from './src/components/register';

const Stack = createStackNavigator();

export default class App extends Component {
  
  render() {

    return (
         <NavigationContainer>
           <Stack.Navigator>
             <Stack.Screen
               name="Login"
              component={login}
             />
             <Stack.Screen
               name="Dashboard"
               component={mainScreen}
             />
             <Stack.Screen
               name="Register"
               component={register}
             />
           </Stack.Navigator>
         </NavigationContainer>
        
    );
  }
}


 