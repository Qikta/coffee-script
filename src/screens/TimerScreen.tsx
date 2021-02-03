import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

/* types */
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../type/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { IconButton } from "../components/IconButton";
import { DripTimer } from "../components/DripTimer";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Timer">;
  route: RouteProp<RootStackParamList, "Timer">;
};

export const TimerScreen: React.FC<Props> = ({
  navigation,
  route,
}: Props) => {
  const { drip } = route.params;
  
  useEffect(() => {
    navigation.setOptions({
      title: drip.name,
      headerLeft: () => (
        <IconButton name="x" onPress={() => navigation.goBack()} />
      ),
      headerRight: () => (
        <IconButton name="check" onPress={() => navigation.goBack()} />
      ),
    });
  });
  return (
    <View style={styles.container}>
      <DripTimer drip={drip} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
});
