// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserScreen from './screens/UserScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName='User Screen' screenOptions={{
        headerStyle:{backgroundColor:'gray'},
        headerTintColor:'white',
        drawerActiveTintColor:'red'
      }}>
        <BottomTab.Screen name='Welcome Screen' component={WelcomeScreen} options={{
          tabBarIcon:({color, size}) => <Ionicons name='home' color={color} size={size}/>
        }} />
        <BottomTab.Screen name='User Screen' component={UserScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
