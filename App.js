import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlatButton from './components/ui/FlatButton';
import IconButton from './components/ui/IconButton';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const onLogoutHandler = async () => {
    console.log('here fsdfsdfsdfdsfd');
    await AsyncStorage.removeItem("token");
    console.log(await AsyncStorage.getItem("token"));
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
        headerRight: ({tintColor}) => (
          <IconButton icon={"exit"} color={tintColor} size={24} onPress={onLogoutHandler}/>
        ),
      }}/>
    </Stack.Navigator>
  );
}

function Navigation() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    console.log('11');
    fetchToken();
    }
    , []);
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem("token");
      console.log('token');
      console.log(token);
      if(token){
        setAuthenticated(true);
      }else{
        setAuthenticated(false);
      }
    };
    console.log(authenticated);
  return (
    <NavigationContainer>
     {authenticated ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <Navigation />
    </>
  );
}