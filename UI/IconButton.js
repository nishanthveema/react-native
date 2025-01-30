import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

const IconButton = ({ name, color, size, press }) => {
  return (
    <Pressable
      onPress={press}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={name} color={color} size={size} />
      </View>
    </Pressable>
  );
};
export default IconButton;
const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginVertical: 2,
    marginHorizontal:8
  },
  pressed: {
    opacity: 0.75,
  },
});
