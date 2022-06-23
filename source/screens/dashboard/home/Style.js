import { StyleSheet } from 'react-native'
import { appColor } from '../../../constants/Colors'
import { Fonts } from '../../../constants/Fonts'

export const DashHomeStyle = StyleSheet.create({
  WalletBalance: {
    width: '100%',
    height: 180,
    backgroundColor: appColor.primaryColor,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  WalletValue: {
    fontSize: 34,
    fontFamily: Fonts.MonsteratBold,
    color: '#fff',
  },
  actionArea: {
    width: '100%',
    height: 90,
    backgroundColor: appColor.secondaryColor,
    marginTop: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionAreaText: {
    color: '#000',
    fontFamily: Fonts.Monsterat500,
  },
})
