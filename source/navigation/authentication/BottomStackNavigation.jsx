import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabScreenOptions } from '../../constants/Screens'

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
