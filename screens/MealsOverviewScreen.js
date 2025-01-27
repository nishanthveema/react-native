import { FlatList, Text, View } from "react-native";
import { mealsOverviewStylesScreenStyles } from "../styles/MealOverviewScreenStyles";
import { MEALS } from "../constants/dummy-data";
import MealItem from "../components/MealOverview/MealItem";
import { useEffect, useLayoutEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({title: route.params.title});
    },[]);
  const { categoryId } = route.params;
  const styles = mealsOverviewStylesScreenStyles();

  const displayMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        renderItem={({ index, item }) => <MealItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default MealsOverviewScreen;
