import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
  Layout,
  Button,
  Section,
  SectionContent,
  Text,
  TopNav,
  themeColor,
  useTheme,
} from 'react-native-rapi-ui'
import { Ionicons } from '@expo/vector-icons'

const Home = ({ navigation }) => {
  const { isDarkmode, setTheme } = useTheme()

  return (
    <Layout>
      <TopNav
        middleContent='Home'
        rightContent={
          <Ionicons
            name={isDarkmode ? 'sunny' : 'moon'}
            size={20}
            color={isDarkmode ? themeColor.white : themeColor.black}
          />
        }
        rightAction={() => {
          isDarkmode ? setTheme('light') : setTheme('dark')
        }}
      />
      <View style={styles.root}>
        <Section>
          <SectionContent>
            <Text style={styles.text}>These components are from Rapi UI</Text>
            <Button
              text='Go To Second Screen '
              status='info'
              size='md'
              style={{ marginTop: 10 }}
              onPress={() => navigation.navigate('SecondScreen')}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontWeight: 'bold', textAlign: 'center' },
})

export default Home
