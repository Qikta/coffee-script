import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* types */
import { RouteProp } from "@react-navigation/native"
import { RootStackParamList } from "../type/navigation"
import { StackNavigationProp } from '@react-navigation/stack';
import { IconButton } from "../components/IconButton";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "CreateScript">
}

export const CreateScriptScreen: React.FC<Props> = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: "新規作成",
      headerLeft: () => (
        <IconButton name="chevron-left" onPress={() => navigation.goBack()} />
    )
    })
  })
  return (
    <View style={styles.container}>
      <Text>CreateScriptScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
