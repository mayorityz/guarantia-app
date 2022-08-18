import React from "react";
import AppWrapper from "../../../constants/AppWrapper";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { GlobalStyle } from "../../../constants/GlobalStyle";
import { DashHomeStyle } from "./Style";
import { Fonts } from "../../../constants/Fonts";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { appColor } from "../../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { DashboardScreenTitles } from "../../../constants/Screens";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Dashboard({ navigation }) {
  const Tab = createMaterialTopTabNavigator();
  const actionOptions = [
    {
      title: "",
      desc: "",
      color: "",
    },
  ];
  return (
    <AppWrapper>
      <View style={[GlobalStyle.p20]}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: Fonts.Monsterat600,
            marginTop: 25,
          }}
        >
          Welcome back, Mayowa
        </Text>
        <View style={[DashHomeStyle.WalletBalance]}>
          <Text style={[DashHomeStyle.WalletValue]}>N0.00</Text>
        </View>

        <TouchableOpacity style={[DashHomeStyle.actionArea]}>
          <View
            style={{
              width: "25%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View/>
            <Icon
              name="link"
              color= "#5D3FD3"
              size={29}
            />
          </View>
          <View style={{ width: "70%" }}>
            <Text style={[DashHomeStyle.actionAreaText, { color: "#000" }]}>
              Request Money
            </Text>
            <Text
              style={[
                DashHomeStyle.actionAreaText,
                { fontSize: 17, fontFamily: Fonts.MonsteratBold },
              ]}
            >
              Generate Payment Link
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[DashHomeStyle.actionArea]}>
          <View
            style={{
              width: "25%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View/>
            <Icon
              name="credit-card"
              color= "#5D3FD3"
              size={29}
            />
          </View>
          <View style={{ width: "70%" }}>
            <Text style={[DashHomeStyle.actionAreaText, { color: "#000" }]}>
              Make Payment
            </Text>
            <Text
              style={[
                DashHomeStyle.actionAreaText,
                { fontSize: 17, fontFamily: Fonts.MonsteratBold },
              ]}
            >
              Fund your wallet
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[DashHomeStyle.actionArea]}>
          <View
            style={{
              width: "25%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View/>
            <Icon
              name="money"
              color= "#5D3FD3"
              size={29}
            />
          </View>
          <View style={{ width: "70%" }}>
            <Text style={[DashHomeStyle.actionAreaText, { color: "#000" }]}>
              Move to my bank
            </Text>
            <Text
              style={[
                DashHomeStyle.actionAreaText,
                { fontSize: 17, fontFamily: Fonts.MonsteratBold },
              ]}
            >
              Withdraw your funds
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            width: "100%",
            height: 1.5,
            backgroundColor: "#f6f6f6",
            marginVertical: 15,
          }}
        />
        <View style={{ height: 256 }}>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontFamily: Fonts.Monsterat500,
                fontSize: 10,
                // color: appColor.primaryColor,
                textTransform: "capitalize",
              },
              tabBarActiveTintColor: "#000",
              tabBarStyle: {},
              tabBarIndicatorStyle: {
                backgroundColor: appColor.primaryColor,
              },
              tabBarBadge: () => (
                <View
                  style={{
                    // height: 22,
                    // width: 22,
                    backgroundColor: "rgba(255, 165, 0, 1)",
                    marginRight: 34,
                    borderRadius: 50,
                  }}
                >
                  <Text
                    style={{ fontSize: 8, textAlign: "center", padding: 3 }}
                  >
                    30
                  </Text>
                </View>
              ),
              tabBarInactiveTintColor: "#6e7f80",
            }}
          >
            <Tab.Screen name="Received Requests" component={IncomingRequests} />
            <Tab.Screen name="My Requests" component={S1} />
          </Tab.Navigator>
        </View>
      </View>
    </AppWrapper>
  );
}

function S1() {
  return (
    <View style={{ backgroundColor: "#fff", height: 256, padding: 12 }}>
      <Text>ok</Text>
    </View>
  );
}

function IncomingRequests() {
  let dummyData = [
    { amount: 4500, from: "Gention Global", time: "2 days ago" },
    { amount: 5500, from: "Anita Idibia", time: "2 days ago" },
    { amount: 12500, from: "Zee's Grills", time: "2 days ago" },
    { amount: 10500, from: "Tha247WebGuy", time: "2 days ago" },
  ];
  let navigation = useNavigation();
  return (
    <>
      <ScrollView>
        {dummyData.map((d) => (
          <View style={{ backgroundColor: "#fff" }}>
            <TouchableOpacity
              style={[DashHomeStyle.ongoingStyle]}
              onPress={() =>
                navigation.navigate(DashboardScreenTitles.DASHBOARD_RECEIVED)
              }
            >
              <View
                style={{
                  width: "15%",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <View>
                  <AntDesign name="arrowdown" size={12} color="red" />
                </View>
              </View>
              <View style={{ width: "25%" }}>
                <Text style={[DashHomeStyle.listText]}>N{d.amount}</Text>
              </View>
              <View style={{ width: "30%" }}>
                <Text style={[DashHomeStyle.listText]}>{d.from}</Text>
              </View>
              <View style={{ width: "30%" }}>
                <Text style={[DashHomeStyle.listText]}>{d.time}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
