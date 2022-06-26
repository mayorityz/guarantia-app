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
  ongoingStyle: {
    flexDirection: 'row',
    height: 55,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f6f6f6',
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
