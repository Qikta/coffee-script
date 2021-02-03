import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";

/* types */
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../type/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { IconButton } from "../components/IconButton";
import { DripDetail } from "../components/DripDetail";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "DripSetting">;
  route: RouteProp<RootStackParamList, "DripSetting">;
};

const { height } = Dimensions.get("window");
const HEADER_PADDING = 32;
const CONTAINER_HEIGHT = height - HEADER_PADDING;

export const DripSettingScreen: React.FC<Props> = ({
  navigation,
  route,
}: Props) => {
  const { drip, dripSettings } = route.params;

  const onChangeAmount = (number: string) => {
    dripSettings.actual_amount = number;
  }
  const onChangeWaterAmount = (number: string) => {
    dripSettings.actual_water_amount = number;
  }
  const onChangeRate = (number: string) => {
    dripSettings.actual_rate = number
  }

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
      <Text>dripSetting</Text>
      <TextInput
        onChangeText={(number) => onChangeAmount( number )}
        value={dripSettings.actual_amount}
        keyboardType="number-pad"
        // returnKeyType="done"
        // onEndEditing={() => {
        //   onChangeWaterAmount(String(Number(dripSettings.actual_amount) * Number(dripSettings.actual_rate)))
        // }}
      />
      <TextInput
        onChangeText={(number) => onChangeWaterAmount(number)}
        value={dripSettings.actual_water_amount}
        keyboardType="number-pad"
        // returnKeyType="done"
        // onEndEditing={() => {
        //   onChangeAmount(String(Number(dripSettings.actual_water_amount) / Number(dripSettings.actual_rate)))
        // }}
      />
      <TextInput
        onChangeText={(number) => onChangeRate(number)}
        value={dripSettings.actual_rate}
        keyboardType="number-pad"
        // returnKeyType="done"
        maxLength={2}
        // onEndEditing={() => {
        //   onChangeWaterAmount(String(Number(dripSettings.actual_amount) * Number(dripSettings.actual_rate)))
        // }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
