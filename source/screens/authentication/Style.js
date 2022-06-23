import { StyleSheet } from 'react-native'
import { Fonts } from '../../constants/Fonts'

export const AuthStyle = StyleSheet.create({
  imageWrapper: {
    width: '100%',
    height: '45%',
    paddingHorizontal: 50,
  },
  headerText: {
    fontFamily: Fonts.MonsteratBold,
    fontSize: 34,
    textAlign: 'center',
    marginBottom: 20,
  },
  headerDesc: {
    fontFamily: Fonts.Monsterat500,
    fontSize: 20,
    textAlign: 'center',
  },
})
