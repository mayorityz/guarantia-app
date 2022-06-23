import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View, TouchableOpacity } from 'react-native'
import AppWrapper from '../../constants/AppWrapper'
import { LogRegScreenApp } from './Style'
import { GlobalStyle } from '../../constants/GlobalStyle'
import Button from '../../components/Button'
import InputField from '../../components/InputFields'
import { appColor } from '../../constants/Colors'
import { Auth_Screen_Titles } from '../../constants/Screens'

export default function Registration() {
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
        <Text style={[LogRegScreenApp.desc]}>Create Account</Text>
        <View>
          <InputField
            label="Username"
            borderColor={appColor.primaryColor}
            labelColor="#fff"
          />

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
            btnTitle="Sign Up"
            btnColor={appColor.darkBlue}
            textColor="#fff"
            onPress={() => null}
            style={{ marginTop: 12 }}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate(Auth_Screen_Titles.LOGIN)}
          >
            <Text style={[LogRegScreenApp.actionText]}>
              Already own an account?{' '}
              <Text style={{ color: appColor.yellow }}>Sign In</Text> here!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppWrapper>
  )
}
