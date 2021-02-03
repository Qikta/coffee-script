import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons'; 
/* screens */
import { HomeStackNavigator } from "./HomeStackNavigator";
import { ScriptStackNavigator } from "./ScriptStackNavigator"
import { ScriptScreen } from "../screens/ScriptScreen";

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: '#EFDAB9',
            inactiveTintColor: '#353436'
        }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="coffee" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Script"
        component={ScriptStackNavigator}
        options={{
          tabBarLabel: "Script",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="prescription" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
