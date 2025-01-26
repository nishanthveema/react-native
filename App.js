import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [chosenNumber, setChosenNumber] = useState(null);
  const [rounds, setRounds] = useState([]);
  const [gameOver, setGameOver] = useState(true);
  const onChosenNumberHandler = (chosenNumber) => {
    setChosenNumber(chosenNumber);
    setGameOver(false);
  };
  let screen = <StartGameScreen call={onChosenNumberHandler} />;
  const gameOverHandler = (round) => {
    setGameOver(true);
    setRounds(round);
  }
  if (chosenNumber) {
    screen = <GameScreen chosenNumber={chosenNumber} gameOver={gameOverHandler}/>;
  }

  const onStartGameHandler = () => {
    setChosenNumber(null);
    setGameOver(true);
    setRounds([]);

  }

  if(gameOver && chosenNumber){
    screen = <GameOverScreen start={onStartGameHandler} round={rounds.length} number={chosenNumber} />
  }
  return (
    <LinearGradient
    style={styles.outerContainer}
    colors={["#37061e", "#ddb52f"]}
    >
        <ImageBackground
          source={require("./assets/img/background.png")}
          resizeMode="cover"
          style={styles.outerContainer}
          imageStyle={{ opacity: 0.5 }}
          >
           <SafeAreaView style={styles.outerContainer}>
              {screen}
        </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
});
