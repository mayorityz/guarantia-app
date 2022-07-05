import React from 'react'
import AppWrapper from '../../../constants/AppWrapper'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import CustomHeader from '../../../components/CustomHeader'
import { settingHomeStyle } from './Style'

export default function Settings() {
  const settings = [
    {
      title: 'Update Password',
      route: '',
      id: 't1',
    },
    {
      title: 'Update Pin',
      route: '',
      id: 't2',
    },
    {
      title: 'Update Profile',
      route: '',
      id: 't3',
    },
    {
      title: 'Update Bank Details',
      route: '',
      id: 't4',
    },
    {
      title: 'Crypto',
      route: '',
      id: 't5',
    },
    {
      title: 'Logout',
      route: '',
      id: 't6',
    },
  ]
  return (
    <AppWrapper>
      <CustomHeader title="Settings" />
      <ScrollView>
        <View>
          <View style={[settingHomeStyle.profileBanner]}>
            <View style={[settingHomeStyle.profileImg]}></View>
            <View>
              <Text style={[settingHomeStyle.profileText]}>Chris Brown</Text>
              <Text style={[settingHomeStyle.profileText]}>
                brown@chris.com.ng
              </Text>
              <Text style={[settingHomeStyle.profileText]}>+2348051985616</Text>
              <Text style={[settingHomeStyle.profileText]}>
                zee's grills and co.
              </Text>
            </View>
          </View>
          {settings.map((setting) => (
            <TouchableOpacity style={[settingHomeStyle.item]}>
              <Text style={[settingHomeStyle.itemText]}>{setting.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </AppWrapper>
  )
}
