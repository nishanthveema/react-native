import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

const GoalInput = ({ onAdd, visible }) => {
  const [goal, setGoal] = useState("");
  const onChangeTextHandler = (text) => {
    setGoal(text);
  };
  const onAddGoalHandlr = () => {
    onAdd(goal);
  };
  return (
    <Modal visible={visible} animationType="slide" transparent={false} backdropColor="red">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          value={goal}
          onChangeText={onChangeTextHandler}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title="ADD GOALs" onPress={onAddGoalHandlr} />
            </View>
            <View style={styles.button}>
                <Button title="Closes" onPress={onAddGoalHandlr} />
            </View>
        </View>
      </View>
    </Modal>
  );
};
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "70%",
    marginRight: 8,
    padding: 15,
  },
  buttonContainer:{
    flexDirection: 'row',
    marginTop: 8,
  },
  button:{
    width: '30%',
    marginHorizontal: 8
  }
});
