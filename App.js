import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllExpensesScreen from './screens/AllExpensesScreen';
import ManageExpensesScreen from './screens/ManageExpensesScreen';
import ResentExpensesScreen from './screens/ResentExpensesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './UI/IconButton';
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const BottomTabNavigators = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate("ManageExpenses",{
      action:"add"
    })
  }
  return <BottomTabs.Navigator initialRouteName='AllExpenses' screenOptions={{
    headerTitleAlign:"center",
    headerStyle:{
      backgroundColor:GlobalStyles.colors.primary500
    },
    headerTintColor:'white',
    tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
    tabBarActiveTintColor:GlobalStyles.colors.accent500,
    headerRight:({tintColor}) => <IconButton name="add" color={tintColor} size={24} press={onPressHandler} />
  }}>
    <BottomTabs.Screen name='AllExpenses' component={AllExpensesScreen} options={{
          headerTitle:'All Expenses',
          tabBarLabel: "All Expenses",
          tabBarIcon:({color, size}) => <Ionicons name='calendar' color={color} size={size}/>
        }}/>
        <BottomTabs.Screen name='RecentExpenses' component={ResentExpensesScreen} options={{
          headerTitle:"Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon:({color, size}) => <Ionicons name='hourglass' color={color} size={size}/>
        }}/>
  </BottomTabs.Navigator>
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomTabNavigators' screenOptions={{
        headerTitleAlign:'center',
        headerStyle:{
          backgroundColor:GlobalStyles.colors.primary500
        },
        headerTintColor:"white"
      }}>
        <Stack.Screen name='BottomTabNavigators' component={BottomTabNavigators} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name='ManageExpenses' component={ManageExpensesScreen} options={{
          title:"Manage Expense",
          presentation:'modal'
        }}/>
        
      </Stack.Navigator>
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
