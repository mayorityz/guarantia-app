import React from 'react'
import AppWrapper from '../../../constants/AppWrapper'
import { View, Text, TouchableOpacity } from 'react-native'
import { GlobalStyle } from '../../../constants/GlobalStyle'
import { DashHomeStyle } from './Style'
import { Fonts } from '../../../constants/Fonts'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { appColor } from '../../../constants/Colors'

export default function Dashboard() {
  const Tab = createMaterialTopTabNavigator()
  const actionOptions = [
    {
      title: '',
      desc: '',
      color: '',
    },
  ]
  return (
    <AppWrapper>
      <View style={[GlobalStyle.p20]}>
        <Text
          style={{
            fontSize: 19,
            fontFamily: Fonts.Monsterat600,
            marginTop: 15,
          }}
        >
          Welcome back, Mayowa
        </Text>
        <View style={[DashHomeStyle.WalletBalance]}>
          <Text style={[DashHomeStyle.WalletValue]}>N0.00</Text>
        </View>

        <TouchableOpacity style={[DashHomeStyle.actionArea]}>
          <View
            style={{
              width: '30%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={{ width: 45, height: 45, backgroundColor: '#000' }} />
          </View>
          <View style={{ width: '70%' }}>
            <Text style={[DashHomeStyle.actionAreaText]}>Request Money</Text>
            <Text
              style={[
                DashHomeStyle.actionAreaText,
                { fontSize: 19, fontFamily: Fonts.MonsteratBold },
              ]}
            >
              Generate Payment Link
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: 1.5,
            backgroundColor: '#f6f6f6',
            marginVertical: 15,
          }}
        />
        <View style={{ height: 256 }}>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontFamily: Fonts.Monsterat500,
                fontSize: 9,
                color: appColor.charcoal,
                textTransform: 'capitalize',
              },
            }}
          >
            <Tab.Screen name="Received Requests" component={S1} />
            <Tab.Screen name="My Requests" component={S1} />
          </Tab.Navigator>
        </View>
      </View>
    </AppWrapper>
  )
}

function S1() {
  return (
    <View style={{ backgroundColor: '#f6f6f6', height: 256, padding: 12 }}>
      <Text>ok</Text>
    </View>
  )
}
