import { TextInput, View, StyleSheet, Alert, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Title from "../components/Title.ios";
import { colors } from "../components/constants";

const StartGameScreen = ({ call }) => {
  const [number, setNumber] = useState();
  const onResetHandler = () => {
    setNumber(null);
  };
  const onConfirmHandler = () => {
    let chosedNUmber = parseInt(number);
    if (isNaN(chosedNUmber) || chosedNUmber <= 0 || chosedNUmber > 99) {
      Alert.alert("Invalid Number", "Number has to be a number", [
        { text: "Okay", style: "destructive", onPress: onResetHandler },
      ]);
      return;
    }
    call(chosedNUmber);
  };
  const onChangeNumberHandler = (input) => {
    setNumber(input);
  };
  return (
    <ScrollView style={styles.screen}>

        <KeyboardAvoidingView style={styles.screen} behavior="height">
            <View style={styles.screenContainer}>
            <Title title="Guess My Number" />
            <View style={styles.outerCantainer}>
                <Text style={styles.instructionText}>Enter number</Text>
                <TextInput
                inputMode="numeric"
                value={number}
                style={styles.input}
                maxLength={2}
                keyboardType="number-pad"
                onChangeText={onChangeNumberHandler}
                />
                <View style={styles.btnContainer}>
                <View style={styles.btnItemContainer}>
                    <PrimaryButton btnName="Reset" press={onResetHandler} />
                </View>
                <View style={styles.btnItemContainer}>
                    <PrimaryButton btnName="Confirm" press={onConfirmHandler} />
                </View>
                </View>
            </View>
            </View>

        </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    screen:{
        flex:1
    },
  screenContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  instructionText: {
    color: "#ddb52f",
    fontSize: 24,
    fontWeight: "bold",
  },
  outerCantainer: {
    padding: 16,
    marginTop: 36,
    backgroundColor: "#37061e",
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 70,
    fontSize: 32,
    borderBottomWidth: 1,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btnItemContainer: {
    flex: 1,
  },
});
export default StartGameScreen;
