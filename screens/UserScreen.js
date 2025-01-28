import { View, Text, Button } from "react-native"

const UserScreen = ({navigation}) => {
    return <View>
        <Text>USer Screen</Text>
        <Button title="Open Drwer" onPress={() => navigation.toggleDrawer()}/>
    </View>
}
export default UserScreen;