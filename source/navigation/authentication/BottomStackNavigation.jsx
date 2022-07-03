import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabScreenOptions } from '../../constants/Screens'
import { View, Text } from 'react-native'
import { appColor } from '../../constants/Colors'

const Tab = createBottomTabNavigator()
export default function BottomStackNavigation() {
  return (
    <Tab.Navigator>
      {TabScreenOptions.map((screen) => (
        <Tab.Screen
          name={screen.name}
          component={screen.component}
          options={{ headerShown: false }}
        />
      ))}
    </Tab.Navigator>
  )
}
