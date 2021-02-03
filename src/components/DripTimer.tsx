import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import { IDrip } from "../type/drip";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
/* interface */
type Props = {
  drip: IDrip;
};
const { width } = Dimensions.get("window");
const CONTAINER_WIDTH = width;

export const DripTimer: React.FC<Props> = ({ drip }: Props) => {
    const [ booleanValue, setBooleanValue] = React.useState(false);
    const { time } = drip;

  const _onPress = () => {
    setBooleanValue(!booleanValue)
  };
 
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={_onPress}>
        <CountdownCircleTimer
          isPlaying={booleanValue}
          duration={time}
          colors={[
            ["#004777", 0.4],
            ["#F7B801", 0.4],
            ["#A30000", 0.2],
          ]}
        >
          {({ remainingTime, animatedColor }: any) => (
            <Animated.Text style={{ color: animatedColor }}>
              {remainingTime}
            </Animated.Text>
          )}
        </CountdownCircleTimer>
      </TouchableOpacity>
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
  buttonContainer: {
    height: 100,
    width: 200,
    borderRadius: 50,
    padding: 10,
    backgroundColor: "#343536",
    margin: 16,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "#EFDAB9",
    fontWeight: "bold",
  },
});
