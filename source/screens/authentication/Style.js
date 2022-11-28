import { StyleSheet } from 'react-native'
import { appColor } from '../../constants/Colors'
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
    color: appColor.charcoal,
  },
  headerDesc: {
    fontFamily: Fonts.Monsterat500,
    fontSize: 17,
    textAlign: 'center',
    color: appColor.charcoal,
    marginBottom: 69,
  },
})

export const LogRegScreenApp = StyleSheet.create({
  Title: {
    fontFamily: Fonts.MonsteratBold,
    fontSize: 40,
    textAlign: 'left',
    color: '#fff',
    marginBottom: 10,
  },
  actionText: {
    textAlign: 'right',
    fontFamily: Fonts.Monsterat500,
    fontSize: 11,
    color: '#fff',
    marginTop: 4,
  },
  desc: {
    color: '#fff',
    fontSize: 20,
    fontFamily: Fonts.Monsterat600,
    marginTop: '10%',
    marginBottom: 30,
  },
})
