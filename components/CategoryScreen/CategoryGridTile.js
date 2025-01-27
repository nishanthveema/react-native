import { Pressable, Text, View } from "react-native";
import { categoryGridTileStyles } from "../../styles/CategoryScreenStyles";
import { useNavigation } from "@react-navigation/native";

const CategoryGridTile = ({ category, onPress }) => {
    const navigation = useNavigation();
  const styles = categoryGridTileStyles(category.color);
  return (
    <View style={styles.outerContainer}>
      <Pressable onPress={onPress.bind(this,category.id, category.title )} style={({pressed}) => [pressed ? styles.buttonPressed : null, styles.buttonStyle]}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{category.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default CategoryGridTile;
