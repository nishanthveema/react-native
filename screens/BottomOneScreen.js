import { View, Text, Pressable, StyleSheet } from "react-native"

const  BottomOneScreen = ({navigation, route}) => {
    const userId = route.params?.userId ?? 2;
    return <View style={Styles.container}>
        <Pressable onPress={() => navigation.navigate('BottomTwo')}>
            <Text>Go to Bottom Two {userId}</Text>
        </Pressable>
    </View>
}
export default  BottomOneScreen;
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});