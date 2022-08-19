import { StyleSheet } from "react-native";
import {appColor} from '../../../constants/Colors';
import { Fonts } from "../../../constants/Fonts";

export const settingHomeStyle = StyleSheet.create({
    item: {
        height: 80,
        width: "100%",
        justifyContent: "center",
       paddingHorizontal: 15,
        marginBottom: 5,
        backgroundColor: "rgba(93, 63, 211, 0.1)"
    },
    itemText: {
        fontFamily: Fonts.MonsteratBold,
        fontSize: 15,
        color: appColor.darkBlue,
        marginHorizontal: 4
    },
    profileBanner: {
        height: 300,
        width: "100%",
        backgroundColor: "#f6f6f6",
        marginBottom: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    profileImg: {
        borderRadius: 150,
        backgroundColor: "#fff",
        marginBottom: 12,
        borderWidth: 0.5,
        borderColor: appColor.primaryColor,
        borderStyle: 'solid',
        padding: 20
    },
    profileText: {
        fontFamily: Fonts.Monsterat600,
        textAlign: "center",
        fontSize: 15,
        marginVertical: 4
    }
})