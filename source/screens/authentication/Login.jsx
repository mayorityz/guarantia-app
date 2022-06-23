import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import WelcomeSvg from '../../components/svgs/WelcomeSvg'
import AppWrapper from '../../constants/AppWrapper'
import { AuthStyle, LogRegScreenApp } from './Style'
import { GlobalStyle } from '../../constants/GlobalStyle'
import Button from '../../components/Button'
import InputField from '../../components/InputFields'
import { appColor } from '../../constants/Colors'

export default function Login() {
  let navigation = useNavigation()

  return (
    <AppWrapper color={appColor.primaryColor}>
      <View
        style={[
          GlobalStyle.p20,
          {
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          },
        ]}
      >
        <Text style={[LogRegScreenApp.Title]}>Guarantia.</Text>
        <Text>Signin</Text>
        <View>
          <InputField
            label="Email"
            borderColor={appColor.primaryColor}
            labelColor="#fff"
          />
          <InputField
            label="Password"
            borderColor={appColor.primaryColor}
            labelColor="#fff"
          />

          <Button
            btnTitle="Login"
            btnColor="#00008b"
            textColor="#fff"
            onPress={() => null}
            style={{ marginTop: 5 }}
          />
        </View>
      </View>
      <StatusBar style="dark" />
    </AppWrapper>
  )
}
