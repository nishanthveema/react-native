import { Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ itemData, onDelete }) => {
  return (
    <Pressable onPress={() => onDelete(itemData.index)}>
      <Text style={styles.goalItem}>{itemData.item}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#ffffff",
  },
});
export default GoalItem;
