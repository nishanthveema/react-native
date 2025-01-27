import { Platform, StyleSheet, Text } from "react-native";

const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};
const styles = StyleSheet.create({
  title:{
    fontSize: 20,
    fontWeight: "bold",
    color:"#ddb52f",
    textAlign: "center",
    // borderWidth:Platform.OS === "android" ? 2 : 0,
    borderWidth:Platform.select({ios:0,android:2}),
    borderColor:"#ddb52f",
    padding:12,
  }
});
export default Title;