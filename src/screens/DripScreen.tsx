import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Animated, InteractionManager } from 'react-native';

/* types */
import { RouteProp } from "@react-navigation/native"
import { RootStackParamList } from "../type/navigation"
import { StackNavigationProp } from '@react-navigation/stack';
import { IconButton } from "../components/IconButton"
import { DripDetail } from '../components/DripDetail'
import { IDrip } from '../type/drip'
import { IDripSettings } from "../type/dripSettings"

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Drip">
  route: RouteProp<RootStackParamList, "Drip">
}

export const DripScreen: React.FC<Props> = ({navigation, route}: Props) => {
  const { drip } = route.params;

  const [dripSettings, setDripSettings] = useState<IDripSettings>(
    {
      actual_amount: String(drip.amount),
      actual_water_amount: String(drip.water_amount),
      actual_rate: String(drip.rate)
    }
  );

  useEffect(() => {
    navigation.setOptions({
      title: drip.name,
      headerLeft: () => (
        <IconButton name="chevron-left" onPress={() => navigation.goBack()} />
    )
    })
  })

  const onPressItem = () => {
    navigation.navigate("DripSetting", {drip, dripSettings});
    setDripSettings
  };
  return (
    <View style={styles.container}>
      <DripDetail 
        drip={drip} 
        dripSettings={dripSettings}
        onPress1={() => onPressItem()}
        onPress2={() => navigation.navigate("Timer", {drip})} />
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
