import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import { getDrip } from "../lib/firebase";
import { DripItem } from "../components/DripItem";
import { Drip } from "../type/drip";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../type/navigation";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

export const HomeScreen = ({ navigation }: Props) => {
  const [drips, setDrips] = useState<Drip[]>([]);

  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const drips = await getDrip();
    setDrips(drips);
  };

  const onPressItem = (drip: Drip) => {
    navigation.navigate("Drip", { drip });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={drips}
        renderItem={({ item }: { item: Drip }) => (
          <DripItem drip={item} onPress={() => onPressItem(item)} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
