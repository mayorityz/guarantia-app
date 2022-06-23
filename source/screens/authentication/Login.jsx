import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'
import WelcomeSvg from '../../components/svgs/WelcomeSvg'
import AppWrapper from '../../constants/AppWrapper'
import { AuthStyle, LogRegScreenApp } from './Style'
import { GlobalStyle } from '../../constants/GlobalStyle'
import Button from '../../components/Button'
import InputField from '../../components/InputFields'
import { appColor } from '../../constants/Colors'
import { Auth_Screen_Titles } from '../../constants/Screens'

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
        <Text style={[LogRegScreenApp.desc]}>Signin</Text>
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
            btnColor={appColor.darkBlue}
            textColor="#fff"
            onPress={() => navigation.navigate('AppDashboard')}
            style={{ marginTop: 5 }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate(Auth_Screen_Titles.REGISTER)}
          >
            <Text style={[LogRegScreenApp.actionText]}>
              Don't own an account?{' '}
              <Text style={{ color: appColor.yellow }}>Sign up</Text> now!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="dark" />
    </AppWrapper>
  )
}
