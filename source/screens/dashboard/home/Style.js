import { StyleSheet } from 'react-native'
import { appColor } from '../../../constants/Colors'
import { Fonts } from '../../../constants/Fonts'

export const DashHomeStyle = StyleSheet.create({
  WalletBalance: {
    width: '100%',
    height: 150,
    backgroundColor: appColor.primaryColor,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  WalletValue: {
    fontSize: 34,
    fontFamily: Fonts.MonsteratBold,
    color: 'rgba(255, 165, 0, 0.9)',
  },
  actionArea: {
    width: '100%',
    height: 80,
    backgroundColor: "rgba(93, 63, 211, 0.1)",
    marginTop: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionAreaText: {
    color: appColor.primaryColor,
    fontFamily: Fonts.Monsterat500,
  },
  ongoingStyle: {
    flexDirection: 'row',
    height: 55,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'rgba(255, 165, 0, 0.2)',
  },
  listItems: {
    justifyContent: 'center',
    alignItems: 'center',
    widt: '100%',
    height: '100%',
  },
  listText: {
    fontFamily: Fonts.Monsterat500,
    fontSize: 10,
  },
})

export const RequestScreenStyle = StyleSheet.create({
  title: {
    fontFamily: Fonts.Monsterat,
    fontSize: 12,
    marginBottom: 3,
  },
  sellerText: {
    fontFamily: Fonts.Monsterat600,
    fontSize: 22,
    marginBottom: 10,
  },
  sellerDesc: {
    fontSize: 13,
    fontFamily: Fonts.Monsterat,
    marginBottom: 10,
    color: appColor.charcoal,
  },
})
