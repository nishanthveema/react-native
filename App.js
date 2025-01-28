import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import {} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return <Drawer.Navigator screenOptions={{
    sceneStyle:{backgroundColor:'#3f2f25'},
    drawerContentStyle:{backgroundColor:'#3f2f25'},
  }}>
    <Drawer.Screen name="MealsCategories" component={CategoriesScreen}/>
  </Drawer.Navigator>
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DrawerNavigator' screenOptions={{
          headerStyle: {
            backgroundColor: '#592a2a',
          },
          headerTintColor: '#fff',
          contentStyle:{
            backgroundColor: '#24180f'
          },
          

      }}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{
          title: 'Drawer Navigator',
          headerTitleAlign: 'center',
          headerShown:false
        }}/>
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
        {/* <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} options={{
          headerRight:() => {
            return <Button title='Tab me'  />
          }
        }}/> */}
        <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} />
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
