import { StyleSheet } from 'react-native'
import { appColor } from '../../../constants/Colors'
import { Fonts } from '../../../constants/Fonts'

export const settingHomeStyle = StyleSheet.create({
  item: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 17,
    marginBottom: 5,
    backgroundColor: '#f6f6f6',
  },
  itemText: {
    fontFamily: Fonts.Monsterat,
    fontSize: 15,
    color: appColor.blackLight500,
  },
  profileBanner: {
    height: 300,
    width: '100%',
    backgroundColor: '#f6f6f6',
    marginBottom: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 150,
    backgroundColor: '#fff',
    marginBottom: 12,
    borderWidth: 0.5,
    borderColor: appColor.primaryColor,
    borderStyle: 'solid',
    padding: 15,
  },
  profileText: {
    fontFamily: Fonts.Monsterat,
    textAlign: 'center',
    fontSize: 15,
  },
})
