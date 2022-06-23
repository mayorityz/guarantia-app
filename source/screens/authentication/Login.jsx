import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import WelcomeSvg from '../../components/svgs/WelcomeSvg'
import AppWrapper from '../../constants/AppWrapper'
import { AuthStyle } from './Style'
import { GlobalStyle } from '../../constants/GlobalStyle'

export default function Login() {
  let navigation = useNavigation()

  return (
    <AppWrapper>
      <View style={[AuthStyle.imageWrapper]}>
        <WelcomeSvg width="100%" height="100%" />
      </View>
      <View style={[GlobalStyle.p20]}>
        <Text style={[AuthStyle.headerText]}>Welcome</Text>
        <Text style={[AuthStyle.headerDesc]}>
          Accept payments for goods and services easily and with safety, with
          the Guarantia Escrow Wallet.
        </Text>
      </View>
    </AppWrapper>
  )
}
