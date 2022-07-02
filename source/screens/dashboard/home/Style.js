import { StyleSheet } from 'react-native'
import { appColor } from '../../../constants/Colors'
import { Fonts } from '../../../constants/Fonts'

export const DashHomeStyle = StyleSheet.create({
  WalletBalance: {
    width: '100%',
    height: 100,
    backgroundColor: appColor.primaryColor,
    borderRadius: 15,
    marginTop: 10,
    justifyContent: 'center',
    paddingLeft: 25,
    marginBottom: 35,
  },
  WalletValue: {
    fontSize: 25,
    fontFamily: Fonts.Monsterat500,
    color: '#fff',
  },
  WalletHeader: {
    color: '#f9f9f9',
    fontFamily: Fonts.Monsterat,
    fontSize: 10,
    marginBottom: -2,
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
  welcomeContainer: {
    marginBottom: 15,
  },
  walletText: {
    fontSize: 19,
    fontFamily: Fonts.Monsterat,
    marginTop: 15,
  },
  dashboardAction: {
    height: 190,
    width: '100%',
    backgroundColor: '#f6f6f6',
    paddingVertical: 22,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 12,
  },
  dashboardActionHeader: {
    fontSize: 18,
    color: appColor.charcoal,
    fontFamily: Fonts.Monsterat500,
  },
  dashboardActionContent: {
    fontSize: 13,
    color: 'grey',
    fontFamily: Fonts.Monsterat,
    marginVertical: 12,
  },
  dashboardActionBtn: {
    height: 50,
    width: 190,
    backgroundColor: appColor.charcoal,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 13,
  },
  dashboardActionBtnText: {
    color: '#fff',
    fontFamily: Fonts.Monsterat,
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
