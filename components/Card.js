import { StyleSheet, View } from "react-native";

const Card = ({ children }) => {
    return <>
    <View style={styles.outerCantainer}>{children}</View>
    </>
}
const styles = StyleSheet.create({
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
      }
})
export default Card;
