import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import WelcomeSvg from '../../components/svgs/WelcomeSvg'
import AppWrapper from '../../constants/AppWrapper'
import { AuthStyle } from './Style'
import { GlobalStyle } from '../../constants/GlobalStyle'
import Button from '../../components/Button'
import { Auth_Screen_Titles } from '../../constants/Screens'
import { appColor } from '../../constants/Colors'

export default function Welcome() {
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
          the{' '}
          <Text style={{ fontStyle: 'italic' }}>Guarantia Escrow Wallet</Text>.
        </Text>

        <Button
          btnTitle="Get Started"
          btnColor={appColor.primaryColor}
          textColor="#fff"
          onPress={() => navigation.navigate(Auth_Screen_Titles.LOGIN)}
        />
      </View>
    </AppWrapper>
  )
}
