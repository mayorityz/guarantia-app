import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AppWrapper from "../../../constants/AppWrapper";
import { Customheader } from "../../../components/Customheader";
import { transactionStyle } from "./style";
// import Icon from "react-native-vector-icons/FontAwesome";
import Icon  from "react-native-vector-icons/MaterialIcons";
import { appColor } from "../../../constants/Colors";
import { Fonts } from "../../../constants/Fonts";

export default function Transactions() {
  const content = [
    { title: "withdraw", icon: "account-balance" },
    { title: "fund my wallet", icon: 'credit-card' },
    { title: "crypto funding", icon: 'grid-view' },
    { title: "my request", icon: 'assignment-turned-in' },
    { title: "incoming requests", icon: 'double-arrow' },
    { title: "transactions", icon: "compare-arrows" },
  ];
  return (
    <AppWrapper>
      <Customheader title="transaction" />
      <View style={transactionStyle.card}>
        <Text style={transactionStyle.user}>john doe</Text>
        <View style={transactionStyle.box}>
          <View>
            <Text style={transactionStyle.text}>Current Amount</Text>
            <Text style={transactionStyle.header}>{"\u20A6"} 100,000</Text>
          </View>
          <View>
            <Text style={transactionStyle.text}>Prev Amount</Text>
            <Text style={transactionStyle.header}>{"\u20A6"} 90,000</Text>
          </View>
        </View>
        <View style={{ marginLeft: 27, marginTop: 10 }}>
          <Text style={transactionStyle.text}>Total withdrawal</Text>
          <Text style={transactionStyle.header}>{"\u20A6"} xxxxxxx</Text>
        </View>
      </View>
      <View style={transactionStyle.buttoncontainer}>
        {content.map((d) => (
          <>
            <TouchableOpacity style={transactionStyle.button}>
              <View style={transactionStyle.buttontext}>
                <Text style={{textAlign: "center"}}>
                  <Icon name={d.icon} color="rgba(255, 165, 0, 1)" size={25}/>
                </Text>
                
               <Text style={{textAlign: "center", color: appColor.primaryColor, fontFamily: Fonts.MonsteratBold}}>{d.title}</Text> 
              </View>
            </TouchableOpacity>
          </>
        ))}
      </View>
    </AppWrapper>
  );
}
