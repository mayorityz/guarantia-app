import React from 'react'
import AppWrapper from '../../../constants/AppWrapper'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { GlobalStyle } from '../../../constants/GlobalStyle'
import { DashHomeStyle } from './Style'
import { Fonts } from '../../../constants/Fonts'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { appColor } from '../../../constants/Colors'
import { AntDesign } from '@expo/vector-icons'
import { DashboardScreenTitles } from '../../../constants/Screens'

import { useNavigation } from '@react-navigation/native'

export default function Dashboard({ navigation }) {
  const Tab = createMaterialTopTabNavigator()
  const actionOptions = [
    {
      title: 'Generate Payment Link',
      desc:
        'Request for payments from customers by creating a unique payment link.',
      action: '',
      btnTitle: 'Create Link',
      id: 'u-1',
    },
    {
      title: 'Fund Wallet',
      desc:
        'Fund your wallet to make payments to suppliers, vendors or service providers.',
      action: '',
      btnTitle: 'Fund Wallet',
      id: 'u-2',
    },
    {
      title: 'Withdraw Funds',
      desc: 'Transfer money from your Guarantia wallet to bank.',
      action: '',
      btnTitle: 'Make Withdrawal',
      id: 'u-3',
    },
  ]
  return (
    <AppWrapper>
      <ScrollView>
        <View style={[GlobalStyle.p20]}>
          <View style={[DashHomeStyle.welcomeContainer]}>
            <Text style={[DashHomeStyle.walletText]}>Hello,</Text>
            <Text
              style={[
                DashHomeStyle.walletText,
                { fontSize: 22, marginTop: -5, fontFamily: Fonts.Monsterat600 },
              ]}
            >
              Mayowa
            </Text>
          </View>

          <View style={[DashHomeStyle.WalletBalance]}>
            <Text style={[DashHomeStyle.WalletHeader]}>Balance</Text>
            <Text style={[DashHomeStyle.WalletValue]}>N0.00</Text>
          </View>

          {actionOptions.map((action) => (
            <View style={[DashHomeStyle.dashboardAction]} key={action.id}>
              <Text style={[DashHomeStyle.dashboardActionHeader]}>
                {action.title}
              </Text>
              <Text style={[DashHomeStyle.dashboardActionContent]}>
                {action.desc}
              </Text>
              <TouchableOpacity style={[DashHomeStyle.dashboardActionBtn]}>
                <Text style={[DashHomeStyle.dashboardActionBtnText]}>
                  {action.btnTitle}
                </Text>
              </TouchableOpacity>
            </View>
          ))}

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
                  // color: appColor.primaryColor,
                  textTransform: 'capitalize',
                },
                tabBarActiveTintColor: appColor.primaryColor,
                tabBarStyle: {},
                tabBarBadge: () => (
                  <View
                    style={{
                      height: 22,
                      width: 22,
                      backgroundColor: 'red',
                      marginRight: 34,
                      borderRadius: 50,
                    }}
                  >
                    <Text>30</Text>
                  </View>
                ),
                tabBarInactiveTintColor: '#6e7f80',
              }}
            >
              <Tab.Screen
                name="Received Requests"
                component={IncomingRequests}
              />
              <Tab.Screen name="My Requests" component={S1} />
            </Tab.Navigator>
          </View>
        </View>
      </ScrollView>
    </AppWrapper>
  )
}

function S1() {
  return (
    <View style={{ backgroundColor: '#fff', height: 256, padding: 12 }}>
      <Text>ok</Text>
    </View>
  )
}

function IncomingRequests() {
  let dummyData = [
    { amount: 4500, from: 'Gention Global', time: '2 days ago' },
    { amount: 5500, from: 'Anita Idibia', time: '2 days ago' },
    { amount: 12500, from: "Zee's Grills", time: '2 days ago' },
    { amount: 10500, from: 'Tha247WebGuy', time: '2 days ago' },
  ]
  let navigation = useNavigation()
  return (
    <>
      <View>
        {dummyData.map((d) => (
          <View style={{ backgroundColor: '#fff' }}>
            <TouchableOpacity
              style={[DashHomeStyle.ongoingStyle]}
              onPress={() =>
                navigation.navigate(DashboardScreenTitles.DASHBOARD_RECEIVED)
              }
            >
              <View
                style={{
                  width: '15%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <View>
                  <AntDesign
                    name="arrowdown"
                    size={17}
                    color={appColor.primaryColor}
                  />
                </View>
              </View>
              <View style={{ width: '25%' }}>
                <Text style={[DashHomeStyle.listText]}>N{d.amount}</Text>
              </View>
              <View style={{ width: '30%' }}>
                <Text style={[DashHomeStyle.listText]}>{d.from}</Text>
              </View>
              <View style={{ width: '30%' }}>
                <Text style={[DashHomeStyle.listText]}>{d.time}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </>
  )
}
