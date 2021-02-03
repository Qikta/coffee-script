import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
/* screen */

import { ScriptScreen } from "../screens/ScriptScreen";
import { CreateScriptScreen } from "../screens/CreateScriptScreen";
import { ScriptDetailScreen } from "../screens/ScriptDetailScreen"
import { RootStackParamList } from "../type/navigation";
const Stack = createStackNavigator<RootStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

const ScriptStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Script"
        component={ScriptScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name="ScriptDetail"
      component={ScriptDetailScreen}
      />
    </Stack.Navigator>
  );
};
export const ScriptStackNavigator = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={ScriptScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="CreateScript" component={CreateScriptScreen} />
    </RootStack.Navigator>
  );
};
