import { Button, Image, ScrollView, Text, View } from "react-native";
import { mealDetailsScreenStyles } from "../styles/MealDetailsScreenStyles";
import { MEALS } from "../constants/dummy-data";
import { useLayoutEffect } from "react";

const MealDetailsScreen = ({ route, navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Button title="Tap Me!" onPress={onButtonPressHandler} />
            }
        })
    },[navigation]);

    const onButtonPressHandler = () => {
        
    }
  const mealId = route.params.mealId;
  const styles = mealDetailsScreenStyles();
  let selectedMeal = MEALS.find((meal) => meal.id == mealId);
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedMeal.duration}m</Text>
        <Text style={styles.detailItem}>
          {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
      </View>
      {selectedMeal.ingredients.map((ig) => (
        <View style={styles.listItemContainer} key={ig}>
          <Text style={styles.listItem}>
            {ig}
          </Text>
        </View>
      ))}
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Styles</Text>
      </View>
      {selectedMeal.steps.map((ig) => (
        <View style={styles.listItemContainer} key={ig}>
          <Text style={styles.listItem}>
            {ig}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};
export default MealDetailsScreen;
