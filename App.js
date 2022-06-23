import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, SafeAreaView } from 'react-native'
import * as Font from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ReadFromStorage } from './source/assets/utils/AppStorage'
import AuthStackNavigation from './source/navigation/authentication/AuthStackNavigation'
import BottomStackNavigation from './source/navigation/authentication/BottomStackNavigation'

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)
  const [statusBar, showStatusBar] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    async function bootApp() {
      try {
        // load required fonts
        await Font.loadAsync({
          Montserrat: require('./source/assets/fonts/Montserrat-Regular.ttf'),
          Montserrat500: require('./source/assets/fonts/Montserrat_500.ttf'),
          Montserrat600: require('./source/assets/fonts/Montserrat_600.ttf'),
          MontserratBold: require('./source/assets/fonts/Montserrat-Bold.ttf'),
          MtSans: require('./source/assets/fonts/MartelSans/MartelSans-Bold.ttf'),
          InterMedium: require('./source/assets/fonts/Inter/Inter-Medium.ttf'),
          InterRegular: require('./source/assets/fonts/Inter/Inter-Regular.ttf'),
          InterSemiBold: require('./source/assets/fonts/Inter/Inter-SemiBold.ttf'),
        })
        await new Promise((resolve) => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
        let checkLog = await ReadFromStorage('@token')
        if (checkLog) setIsLoggedIn(true)
        console.log('End!')
      }
    }
    bootApp()
  }, [])

  const Stack = createNativeStackNavigator()

  if (!appIsReady) return <ActivityIndicator color="blue" />

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppHome">
        <Stack.Screen
          name="AppHome"
          component={AuthStackNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
