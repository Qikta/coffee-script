import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, InteractionManager } from 'react-native';

/* types */
import { RouteProp } from "@react-navigation/native"
import { RootStackParamList } from "../type/navigation"
import { StackNavigationProp } from '@react-navigation/stack';
import { IconButton } from "../components/IconButton"
import { DripDetail } from '../components/DripDetail'
import { DripTimer } from '../components/DripTimer'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "ScriptDetail">
  route: RouteProp<RootStackParamList, "ScriptDetail">
}

export const ScriptDetailScreen: React.FC<Props> = ({navigation, route}: Props) => {
  const { script } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: script.name,
      headerLeft: () => (
        <IconButton name="chevron-left" onPress={() => navigation.goBack()} />
    )
    })
  })
  return (
    <View style={styles.container}>
        <Text>ScriptDetailScreen</Text>
        <Text>{script.name}</Text>
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
