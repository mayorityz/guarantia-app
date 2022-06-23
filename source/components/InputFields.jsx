import React from 'react'
import { TextInput, View, Text } from 'react-native'
import { inputFieldStyle } from './styles/InputStyle'

export default function InputField({
  borderColor,
  label,
  labelColor = '#000',
}) {
  return (
    <View>
      <Text style={[inputFieldStyle.label, { color: labelColor }]}>
        {label}
      </Text>
      <TextInput style={[inputFieldStyle.field]} />
    </View>
  )
}
