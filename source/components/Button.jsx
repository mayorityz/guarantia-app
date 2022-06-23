import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { BtnStyle } from './styles/BtnStyles'

export default function Button({
  btnTitle,
  btnColor,
  textColor,
  onPress,
  ...styles
}) {
  return (
    <TouchableOpacity
      style={[BtnStyle.defaultBtn, { backgroundColor: btnColor }, styles.style]}
      onPress={onPress}
    >
      <Text style={[BtnStyle.defaultBtnText, { color: textColor }]}>
        {btnTitle}
      </Text>
    </TouchableOpacity>
  )
}
