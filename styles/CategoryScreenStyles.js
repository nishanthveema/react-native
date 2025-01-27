import { StyleSheet } from "react-native";

export const categoryScreenStyles = () => {
  return StyleSheet.create({});
};

export const categoryGridTileStyles = (bgColor) => {
  return StyleSheet.create({
    outerContainer: {
      flex: 1,
      margin: 16,
      height: 150,
      borderRadius: 10,
      elevation: 4,
      ovverflow: "hidden",
      backgroundColor:'white'
    },
    buttonStyle: {
      flex: 1,
    },
    innerContainer: {
      backgroundColor: bgColor,
      flex: 1,
      padding: 16,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    title: {
      fontWeight: "bold",
      fontSize: 18,
    },
    buttonPressed: {
      opacity: 0.5,
    },
  });
};
