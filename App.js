import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import {} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MealsCategories' screenOptions={{
          headerStyle: {
            backgroundColor: '#592a2a',
          },
          headerTintColor: '#fff',
          contentStyle:{
            backgroundColor: '#24180f'
          }

      }}>
        <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{
          title: 'Meal Categories',
          headerTitleAlign: 'center',
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
