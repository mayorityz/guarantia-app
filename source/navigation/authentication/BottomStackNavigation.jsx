import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabScreenOptions } from "../../constants/Screens";
import Icon from "react-native-vector-icons/MaterialIcons";
import { appColor } from "../../constants/Colors";

const Tab = createBottomTabNavigator();
export default function BottomStackNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: appColor.primaryColor,
        },
        tabBarActiveTintColor: appColor.primaryColor,
      }}
    >
      {TabScreenOptions.map((screen) => (
        <Tab.Screen
          name={screen.name}
          component={screen.component}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Icon name={screen.icon} color="#232B2B" size={25} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
