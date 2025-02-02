import { View, Text, StyleSheet } from "react-native"

const  BottomTwoScreen = ({route}) => {
    const userId = route.params.userId;
    return <View style={Styles.container}>
        <Text>Bottom Two {userId}</Text>
    </View>
}
export default  BottomTwoScreen;
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});