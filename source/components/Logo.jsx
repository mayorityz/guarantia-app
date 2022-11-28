import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function Logo() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../assets/images/g_logo.png')}
        style={[style.image]}
      />
    </View>
  )
}
const style = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
})
