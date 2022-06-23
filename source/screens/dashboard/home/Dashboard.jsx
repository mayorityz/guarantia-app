import React from 'react'
import AppWrapper from '../../../constants/AppWrapper'
import { View, Text, TouchableOpacity } from 'react-native'
import { GlobalStyle } from '../../../constants/GlobalStyle'
import { DashHomeStyle } from './Style'
import { Fonts } from '../../../constants/Fonts'

export default function Dashboard() {
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
        <Text>Welcome back, Mayowa</Text>
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
      </View>
    </AppWrapper>
  )
}
