import { FlatList, View } from "react-native";
import { categoryScreenStyles } from "../styles/CategoryScreenStyles";
import { CATEGORIES } from "../constants/dummy-data";
import CategoryGridTile from "../components/CategoryScreen/CategoryGridTile";


const CategoriesScreen = ({ navigation }) => {
  const styles = categoryScreenStyles();
  const onPressHandler = (categoryId, title) => {
    // navigation.setOptions({title: title});
    navigation.navigate("MealsOverview",{categoryId, title});
  };
  const renderCategoryItemHandler = (itemData) => {
    return <CategoryGridTile category={itemData.item} onPress={onPressHandler} />;
  };
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItemHandler}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};
export default CategoriesScreen;
