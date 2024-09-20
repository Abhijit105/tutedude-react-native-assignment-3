import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home.js'
import SecondScreen from '../screens/SecondScreen.js'

const StackNavigator = createNativeStackNavigator()

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
        <StackNavigator.Screen name='Home' component={Home} />
        <StackNavigator.Screen name='SecondScreen' component={SecondScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}
