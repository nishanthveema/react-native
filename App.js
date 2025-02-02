import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserScreen from './screens/UserScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import BottomOneScreen from './screens/BottomOneScreen';
import BottomTwoScreen from './screens/BottomTwoScreen';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const BottomDrawer = () => {
  return (
      <Drawer.Navigator initialRouteName='BottomOne' screenOptions={{
        headerStyle:{backgroundColor:'gray'},
        headerTintColor:'white',
        drawerActiveTintColor:'red'
      }}>
        <Drawer.Screen name='BottomOne' component={BottomOneScreen} />
        <Drawer.Screen name='BottomTwo' component={BottomTwoScreen} />
      </Drawer.Navigator>
  );
}
export default function App() {
  

  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName='WelcomeScreen' screenOptions={{
        headerStyle:{backgroundColor:'gray'},
        headerTintColor:'white',
        drawerActiveTintColor:'red'
      }}>
        <BottomTab.Screen name='WelcomeScreen' component={WelcomeScreen} options={{
          tabBarIcon:({color, size}) => <Ionicons name='home' color={color} size={size}/>
        }} />
        <BottomTab.Screen name='BottomDrawer' component={BottomDrawer} options={{
          headerShown:false,
        }} />
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
