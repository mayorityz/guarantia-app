import { StyleSheet } from "react-native"
import { appColor } from "../../../constants/Colors"
import { Fonts } from "../../../constants/Fonts"

export const transactionStyle = StyleSheet.create({
    card:{
        backgroundColor: appColor.primaryColor,
        paddingHorizontal: 20,
        marginTop: 30,
        height: 210,
        borderRadius: 20,
        marginHorizontal: 5
    },
    header: {
        color: "rgba(255, 165, 0, 1)",
        fontSize: 25,
        fontWeight: '700',
        fontFamily: Fonts.MonsteratBold
    },
    user: {
        color: '#fff',
        fontSize: 28,
        fontWeight: "700",
        textAlign: "center",
        marginVertical: 15,
        fontFamily: Fonts.MonsteratBold
    },
    text: {
        color: '#fff',
        fontWeight: "700"
    },
    box: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },
    buttoncontainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 200,
        flexWrap: 'wrap',
        marginTop: 40
    },
    button: {
        backgroundColor: "#fff", 
        width: "50%",
        padding: 5
    },
    buttontext:{
        textAlign: "center",
        backgroundColor: "rgba(93, 63, 211, 0.1)",
        padding: 30,
        color: appColor.primaryColor,
        height: 110,
        fontWeight: "700"
    }
})