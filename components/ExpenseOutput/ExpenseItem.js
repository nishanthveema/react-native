import { Pressable, Text, View } from "react-native";
import { expenseListStyles } from "../../styles/AllExpensesScreenStyles";
import { getFormattedDate } from "../../Util/date";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ item }) => {
  const styles = expenseListStyles();
  const navigation = useNavigation();
  const expensePressedHandler = () => {
    navigation.navigate("ManageExpenses",{
      expenseId:item.id
    });
  }
  return (
    <Pressable onPress={expensePressedHandler} style={({pressed}) => pressed ? styles.pressed : null}>
      <View style={styles.listItemContainer}>
        <View>
            <Text style={[styles.textBase,styles.description]}>{item.description}</Text>
            <Text style={styles.textBase}>{getFormattedDate(item.date)}</Text>
        </View>
        <View style={styles.priceContainer}>
            <Text style={styles.amontText}>{item.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default ExpenseItem;
