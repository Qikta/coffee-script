import { StatusBar } from 'expo-status-bar';
import React, { useEffect , useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

/* types */
import { RootStackParamList } from "../type/navigation"
import { StackNavigationProp } from '@react-navigation/stack';
import { Script } from "../type/script"
import { FloatingActionButton } from "../components/FloatingActionButton"
import { getScript } from '../lib/firebase';
import {ScriptItem } from "../components/ScriptItem"

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Script">
};

export const ScriptScreen: React.FC<Props> = ({ navigation }: Props) => {
  const[scripts, setScripts] = useState<Script[]>([]);

  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const scripts = await getScript();
    setScripts(scripts);
  };

  const onPressItem = (script: Script) => {
    navigation.navigate("ScriptDetail", { script });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={scripts}
        renderItem={({ item }: { item: Script }) => (
          <ScriptItem script={item} onPress={() => onPressItem(item)} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <FloatingActionButton 
        iconName="plus"
        onPress={() => navigation.navigate( "CreateScript" )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: "relative",
  },
});
