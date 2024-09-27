import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home.js'
import SecondScreen from '../screens/SecondScreen.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import About from '../screens/About.js'
import Profile from '../screens/Profile.js'
import { useTheme, themeColor } from 'react-native-rapi-ui'
import TabBarIcon from '../components/TabBarIcon.js'
import TabBarText from '../components/TabBarText.js'

const StackNavigator = createNativeStackNavigator()
const TabsNavigator = createBottomTabNavigator()

const Tabs = () => {
  const { isDarkmode, setTheme } = useTheme()

  return (
    <TabsNavigator.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDarkmode
            ? themeColor.dark100
            : themeColor.white100,
          borderTopColor: isDarkmode ? themeColor.dark100 : themeColor.white100,
        },
      }}
    >
      <TabsNavigator.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText title='Home' focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon='home' focused={focused} />
          ),
          headerShown: true,
        }}
      />
      <TabsNavigator.Screen
        name='About'
        component={About}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText title='About' focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon='information-circle' focused={focused} />
          ),
          headerShown: true,
        }}
      />
      <TabsNavigator.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText title='Profile' focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon='person' focused={focused} />
          ),
          headerShown: true,
        }}
      />
    </TabsNavigator.Navigator>
  )
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
        <StackNavigator.Screen name='Tabs' component={Tabs} />
        <StackNavigator.Screen name='SecondScreen' component={SecondScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}
