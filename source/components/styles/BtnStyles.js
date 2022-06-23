import { StyleSheet } from 'react-native'
import { Fonts } from '../../constants/Fonts'

export const BtnStyle = StyleSheet.create({
  defaultBtn: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultBtnText: {
    fontSize: 17,
    textTransform: 'uppercase',
    fontFamily: Fonts.Monsterat500,
  },
})
