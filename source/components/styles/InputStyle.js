import { StyleSheet } from 'react-native'
import { appColor } from '../../constants/Colors'
import { Fonts } from '../../constants/Fonts'

export const inputFieldStyle = StyleSheet.create({
  field: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    height: 55,
    paddingHorizontal: 20,
    borderBottomColor: appColor.primaryColor,
    borderBottomWidth: 1,
    fontFamily: Fonts.Monsterat500,
    marginBottom: 20,
    borderRadius: 5,
  },
  label: {
    marginBottom: 4,
    fontFamily: Fonts.Monsterat500,
    fontSize: 10,
  },
})
