import { StyleSheet, Text, View } from "react-native";

const NumberContainer = ({number}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: '#ddb52f',
        padding: 24,
        borderRadius: 10,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 32,
        borderWith: 2,
        color: '#ddb52f',
        // textAlign: 'center'
    }
});
export default NumberContainer;