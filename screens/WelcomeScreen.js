import { View, Text, StyleSheet, Pressable } from "react-native"

const  WelcomeScreen = ({navigation}) => {
    const onPressHandler = () => {
        navigation.navigate("BottomDrawer",{
            screen: 'BottomOne',
            params:{userId:12}
        });
    }
    return <View style={Styles.container}>
        <Pressable onPress={onPressHandler}>
            <View style={Styles.bottomContainer}>
                <Text style={Styles.text}>Welcome Screen</Text>
            </View>
        </Pressable>
    </View>
}
export default  WelcomeScreen;
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        justifyContent: 'center',
        color: 'white',
        padding: 10,
        width: '100%',
        backgroundColor: 'blue'
    },
    text:{
        color: 'white'
    }
});