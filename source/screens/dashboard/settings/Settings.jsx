import React from 'react'
import AppWrapper from '../../../constants/AppWrapper'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import CustomHeader from '../../../components/CustomHeader'
import { settingHomeStyle } from './Style'
import { AntDesign } from '@expo/vector-icons'
import { appColor } from '../../../constants/Colors'
import {
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

export default function Settings() {
  const settings = [
    {
      title: 'Update Password',
      route: '',
      id: 't1',
      icon: (
        <MaterialCommunityIcons
          name="form-textbox-password"
          size={22}
          color={appColor.blackLight500}
        />
      ),
    },
    {
      title: 'Update Pin',
      route: '',
      id: 't2',
      icon: (
        <MaterialCommunityIcons
          name="account-key-outline"
          size={22}
          color={appColor.blackLight500}
        />
      ),
    },
    {
      title: 'Update Profile',
      route: '',
      id: 't3',
      icon: <Feather name="user" size={21} color={appColor.blackLight500} />,
    },
    {
      title: 'Update Bank Details',
      route: '',
      id: 't4',
      icon: (
        <FontAwesome name="bank" size={15} color={appColor.blackLight500} />
      ),
    },
    {
      title: 'Crypto',
      route: '',
      id: 't5',
      icon: (
        <FontAwesome5
          name="ethereum"
          size={24}
          color={appColor.blackLight500}
        />
      ),
    },
    {
      title: 'Logout',
      route: '',
      id: 't6',
      icon: <MaterialIcons name="logout" size={15} color="red" />,
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
            <TouchableOpacity style={[settingHomeStyle.item]} key={setting.id}>
              <View style={[settingHomeStyle.itemBox]}>
                {setting.icon}
                <Text style={[settingHomeStyle.itemText]}>{setting.title}</Text>
              </View>
              <View>
                <AntDesign
                  name="arrowright"
                  size={14}
                  color={appColor.blackLight500}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </AppWrapper>
  )
}
