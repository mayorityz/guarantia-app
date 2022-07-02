import React from 'react'
import { SafeAreaView, Platform } from 'react-native'

export default function AppWrapper({ children, color = '#fff', ...props }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: color,
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 35 : 0,
        props,
      }}
    >
      {children}
    </SafeAreaView>
  )
}
