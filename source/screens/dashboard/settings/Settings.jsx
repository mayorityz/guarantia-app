import React from "react";
import AppWrapper from "../../../constants/AppWrapper";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Customheader } from "../../../components/Customheader";
import { settingHomeStyle } from "./style";
import Icon from "react-native-vector-icons/MaterialIcons";
import { appColor } from "../../../constants/Colors";

export default function Settings() {
  const settings = [
    {
      title: "update password",
      route: "",
      id: "t1",
      icon: "lock",
    },
    {
      title: "update pin",
      route: "",
      id: "t2",
      icon: "security",
    },
    {
      title: "update profile",
      route: "",
      id: "t3",
      icon: "person",
    },
    {
      title: "update bank details",
      route: "",
      id: "t4",
      icon: "account-balance",
    },
    {
      title: "crypto",
      route: "",
      id: "t5",
      icon: "grid-view",
    },
    {
      title: "logout",
      route: "",
      id: "t6",
      icon: "logout",
    },
  ];
  return (
    <AppWrapper>
      <Customheader title="settings" />
      <ScrollView>
        <View>
          <View style={settingHomeStyle.profileBanner}>
            <View style={settingHomeStyle.profileImg}>
              <Icon name="account-circle" color="#5D3FD3" size={75} />
            </View>
            <View>
              <Text style={settingHomeStyle.profileText}> Chris brown</Text>
              <Text style={settingHomeStyle.profileText}>brown@mail.com</Text>
              <Text style={settingHomeStyle.profileText}>+234 70 *** ***</Text>
              <Text style={settingHomeStyle.profileText}>
                zee's grills and co
              </Text>
            </View>
          </View>
          {settings.map((setting) => (
            <TouchableOpacity style={settingHomeStyle.item}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Icon name={setting.icon} color="rgba(255, 165, 0, 1)" size={20} />
                  <Text style={settingHomeStyle.itemText}>{setting.title}</Text>
                </View>
                <Icon name="chevron-right" color="rgba(255, 165, 0, 1)" size={25} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </AppWrapper>
  );
}
