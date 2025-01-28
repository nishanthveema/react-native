import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserScreen from './screens/UserScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='User Screen' screenOptions={{
        headerStyle:{backgroundColor:'gray'},
        headerTintColor:'white',
        drawerActiveTintColor:'red'
      }}>
        <Drawer.Screen name='Welcome Screen' component={WelcomeScreen} />
        <Drawer.Screen name='User Screen' component={UserScreen} />
      </Drawer.Navigator>
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
