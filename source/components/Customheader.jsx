import React from "react";
import { View, Text } from "react-native";
import { appColor } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";

export const Customheader = ({ title }) => {
  return (
    <View
      style={{
        height: 70,
        width: "100%",
        backgroundColor: appColor.primaryColor,
        justifyContent: "center",
        marginBottom: 1,
      }}
    >
      <View></View>
      <Text
        style={{
          fontFamily: Fonts.Monsterat500,
          color: "#fff",
          fontSize: 16,
          marginLeft: 20,
          textTransform: "uppercase",
        }}
      >
        {title}
      </Text>
    </View>
  );
};
