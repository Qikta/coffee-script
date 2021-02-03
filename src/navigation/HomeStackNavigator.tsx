import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
/* screen */
import { HomeScreen } from "../screens/HomeScreen";
import { DripScreen } from "../screens/DripScreen";
import { TimerScreen } from "../screens/TimerScreen"
import { DripSettingScreen } from "../screens/DripSettingScreen";
import { RootStackParamList } from "../type/navigation";

const Stack = createStackNavigator<RootStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Drip" component={DripScreen} />
    </Stack.Navigator>
  );
};
export const HomeStackNavigator = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStack}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="DripSetting" component={DripSettingScreen} />
      <Stack.Screen name="Timer" component={TimerScreen} />
    </RootStack.Navigator>
  );
};
