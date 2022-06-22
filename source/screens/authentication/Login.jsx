import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import AppWrapper from '../../constants/AppWrapper'

export default function Login() {
  let navigation = useNavigation()
  return (
    <AppWrapper>
      <View>
        <Text>Login</Text>
      </View>
    </AppWrapper>
  )
}
