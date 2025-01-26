import { Text, View, Pressable, StyleSheet } from "react-native";
import { colors } from "./constants";

const PrimaryButton = ({ btnName, press }) => {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={({pressed}) => [pressed ? styles.pressed : "", styles.btnContainer]}
        onPress={() => press()}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.btnText}>{btnName}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  btnContainer: {
    backgroundColor: colors.primary500,
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 8,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  pressed:{
    opacity:0.75,

  }
});
export default PrimaryButton;
