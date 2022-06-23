import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import AppWrapper from '../../constants/AppWrapper'
import { LogRegScreenApp } from './Style'
import { GlobalStyle } from '../../constants/GlobalStyle'
import Button from '../../components/Button'
import InputField from '../../components/InputFields'
import { appColor } from '../../constants/Colors'

export default function Registration() {
  let navigation = useNavigation()

  return (
    <AppWrapper>
      <View
        style={[
          GlobalStyle.p20,
          {
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: appColor.primaryColor,
          },
        ]}
      >
        <Text style={[LogRegScreenApp.Title]}>Guarantia.</Text>
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
            btnTitle="Login"
            btnColor="#fff"
            textColor={appColor.primaryColor}
            onPress={() => null}
          />
        </View>
      </View>
    </AppWrapper>
  )
}
