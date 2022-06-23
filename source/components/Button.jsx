import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default function Button({ btnTitle }) {
  return (
    <TouchableOpacity>
      <Text>{btnTitle}</Text>
    </TouchableOpacity>
  )
}
