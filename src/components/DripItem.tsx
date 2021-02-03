import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Drip } from "../type/drip";
/* interface */
interface Props {
  drip: Drip;
  onPress: () => void
}

const { width } = Dimensions.get("window");
const CONTAINER_WIDTH = width / 3;
const PADDING = 8;
const IMAGE_WIDTH = CONTAINER_WIDTH - PADDING * 2;

export const DripItem: React.FC<Props> = ({ drip, onPress }: Props) => {
  const { name, image_url } = drip;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image_url }} style={styles.image} />
      <Text style={styles.nameText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CONTAINER_WIDTH,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderRadius: IMAGE_WIDTH / 2,
    backgroundColor: "#343536"
  },
  nameText: {
    fontSize: 16,
    color: "#EFDAB9",
    marginTop: 8,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    color: "#888",
    marginTop: 8,
  }
});
