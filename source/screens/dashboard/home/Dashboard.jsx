import React from 'react'
import AppWrapper from '../../../constants/AppWrapper'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { GlobalStyle } from '../../../constants/GlobalStyle'
import { DashHomeStyle } from './Style'
import { Fonts } from '../../../constants/Fonts'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { appColor } from '../../../constants/Colors'
import { AntDesign } from '@expo/vector-icons'

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
            <Text style={[DashHomeStyle.actionAreaText]}>Make Payment</Text>
            <Text
              style={[
                DashHomeStyle.actionAreaText,
                { fontSize: 19, fontFamily: Fonts.MonsteratBold },
              ]}
            >
              Fund your wallet
            </Text>
          </View>
        </TouchableOpacity>

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
            <Text style={[DashHomeStyle.actionAreaText]}>Move to my bank</Text>
            <Text
              style={[
                DashHomeStyle.actionAreaText,
                { fontSize: 19, fontFamily: Fonts.MonsteratBold },
              ]}
            >
              Withdraw your funds
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
            <Tab.Screen name="Received Requests" component={IncomingRequests} />
            <Tab.Screen name="My Requests" component={S1} />
          </Tab.Navigator>
        </View>
      </View>
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
  return (
    <>
      <ScrollView>
        {dummyData.map((d) => (
          <View style={{ backgroundColor: '#fff' }}>
            <TouchableOpacity style={[DashHomeStyle.ongoingStyle]}>
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
      </ScrollView>
    </>
  )
}
