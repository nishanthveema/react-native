import { useEffect, useState } from "react";
import {  StyleSheet, Text, useWindowDimensions, View } from "react-native";



const NumberContainer = ({ number }) => {
  const styles = useStyles();

 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
    </View>
  );
};

const useStyles = () => {
  const {width, height} = useWindowDimensions();
  return StyleSheet.create({
    container: {
      padding: width < 500 ? 12 : 48,
      borderRadius: 10,
      margin: width < 400 ? 12 : 24,
      borderWidth: 4,
      borderColor: "#ddb52f",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 32,
      borderWith: 2,
      color: "#ddb52f",
    },
  });
};

export default NumberContainer;
