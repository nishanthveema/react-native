import { StyleSheet, Text } from "react-native";

const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};
const styles = StyleSheet.create({
  title:{
    fontSize: 20,
    fontWeight: "bold",
    color:"#ddb52f",
    textAlign: "center",
    borderWidth:2,
    borderColor:"#ddb52f",
    padding:12
  }
});
export default Title;