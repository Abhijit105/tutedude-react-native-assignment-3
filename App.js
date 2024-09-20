import React from 'react'
import AppNavigator from './src/navigator/AppNavigator'
import { ThemeProvider } from 'react-native-rapi-ui'

export default function App() {
  return (
    <ThemeProvider theme='light'>
      <AppNavigator />
    </ThemeProvider>
  )
}
