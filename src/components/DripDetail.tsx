import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  GestureResponderEvent,
} from "react-native";
import { IDrip } from "../type/drip";
import { IDripSettings } from "../type/dripSettings"
/* interface */
type Props = {
  drip: IDrip;
  dripSettings: IDripSettings;
  onPress1: (event: GestureResponderEvent) => void;
  onPress2: (event: GestureResponderEvent) => void;
};

const { width } = Dimensions.get("window");
const CONTAINER_WIDTH = width;
const PADDING = 16;
const IMAGE_WIDTH = CONTAINER_WIDTH - PADDING * 5;

export const DripDetail: React.FC<Props> = ({
  drip,
  dripSettings,
  onPress1,
  onPress2,
}: Props) => {
  const { name, image_url } = drip;
  const { actual_amount, actual_water_amount, actual_rate} = dripSettings;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress2}>
        <Image source={{ uri: image_url }} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.textView}>
        <TouchableOpacity onPress={onPress1} style={styles.buttonContainer}>
          <Text style={styles.text}>{actual_rate}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress1} style={styles.buttonContainer}>
          <Text style={styles.text}>{actual_amount}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress1} style={styles.buttonContainer}>
          <Text style={styles.text}>{actual_water_amount}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={styles.underText}>粒度</Text>
        <Text style={styles.underText}>コーヒー豆</Text>
        <Text style={styles.underText}>湯量</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CONTAINER_WIDTH,
    padding: 16,
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderRadius: IMAGE_WIDTH / 2,
  },
  text: {
    fontSize: 16,
    color: "#EFDAB9",
    fontWeight: "bold",
  },
  textView: {
    flex: 1,
    flexDirection: "row",
  },
  description: {
    fontSize: 12,
    color: "#888",
    marginTop: 58,
    flex: 0.33,
    textAlign: "center",
  },
  buttonContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    padding: 10,
    marginTop: 58,
    backgroundColor: "#343536",
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  underText: {
    color: "#343536",
    paddingHorizontal: 10,
    marginHorizontal: 34,
    alignItems: "center",
    justifyContent: "center",
  },
});
