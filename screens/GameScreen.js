import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import Ionicons from "@expo/vector-icons/Ionicons";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
let minBountry = 1;
let maxBountry = 100;
const GameScreen = ({ chosenNumber, gameOver }) => {
  const [rounds, setRounds] = useState([]);
  const initialGuess = generateRandomBetween(1, 100, chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      gameOver(rounds);
    }
  }, [currentGuess, chosenNumber, gameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction == "lower" && currentGuess < chosenNumber) ||
      (direction == "higher" && currentGuess > chosenNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction == "lower") {
      maxBountry = currentGuess;
    } else {
      minBountry = currentGuess + 1;
    }
    let newGuess = generateRandomBetween(minBountry, maxBountry, currentGuess);
    setRounds((prevState) => [...prevState, currentGuess]);
    setCurrentGuess(newGuess);
  };

  const onRenderItem = (itemData) => {
    return <View style={styles.listItem}>
      <Text>#{itemData.index+1}</Text>
      <Text>{itemData.item}</Text>
      </View>
  }

  return (
    <View style={styles.screen}>
      <Title title="Opponent's Guess" />
      <NumberContainer number={currentGuess} />
      <Card>
        <Text style={styles.instructionText}>Higher or Lower?</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.btnItemContainer}>
            <PrimaryButton
              btnName={<Ionicons name="add" size={24} />}
              press={() => nextGuessHandler("higher")}
            />
          </View>
          <View style={styles.btnItemContainer}>
            <PrimaryButton
              btnName={<Ionicons name="remove" size={24} />}
              press={() => nextGuessHandler("lower")}
            />
          </View>
        </View>
      </Card>
        <View style={styles.listContainer}>
          <FlatList data={rounds} keyExtractor={item => item} renderItem={onRenderItem}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  btnItemContainer: {
    flex: 1,
  },
  instructionText: {
    color: "#ddb52f",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  listContainer:{
    flex: 1,
    padding: 16,
    width:"100%"
  },
  listItem:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10
  }
});
export default GameScreen;
