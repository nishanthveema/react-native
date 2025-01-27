import { Image, Pressable, Text, View } from "react-native";
import { mealItemStyles } from "../../styles/MealOverviewScreenStyles";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({ item }) => {
    const navigation = useNavigation();
  const styles = mealItemStyles();
  return (
    <View style={styles.mealItem}>
      <Pressable
      onPress={() => navigation.navigate('MealDetailsScreen', {mealId: item.id})}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{item.duration}m</Text>
            <Text style={styles.detailItem}>
              {item.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              {item.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
export default MealItem;
