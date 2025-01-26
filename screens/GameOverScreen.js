import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({round, number, start}) => {
  return <View style={styles.outerContainer}>
    <Title title={"GAME OVER!"}/>
    <View style={styles.imageContainer}>
      <Image source={require('../assets/img/success.png')} style={styles.image} />
    </View>
    <Text>Your phone needed <Text style={styles.round}>{round}</Text> rounds to guess the number <Text style={styles.number}>{number}</Text>.</Text>
    <PrimaryButton btnName="NEW GAME" press={start} />
  </View>;
};
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    paddin:24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer:{
    borderRadius: 150,
    width: 300,
    height: 300,
    borderColor: "black",
    borderWidth: 3,
    overflow: "hidden",
    margin: 36
  },
  image:{
    width: "100%",
    height: "100%"
  },
  round:{
    fontWeight: "bold",
    fontStyle: "italic",
    color: "yellow"
  },
  number:{
    fontWeight: "bold",
    fontStyle: "italic",
    color: "green"
  }
});
export default GameOverScreen;
