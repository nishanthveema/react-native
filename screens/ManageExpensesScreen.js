import { View, Text } from "react-native";
import { manageExpensesScreenStyles } from "../styles/ManageExpensesScreenStyles";
import { useLayoutEffect } from "react";

const ManageExpensesScreen = ({ route,navigation }) => {
  const styles = manageExpensesScreenStyles();
  let expenseId = route.params.expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
        title: expenseId ? "Edit Expense" : "Add Expense"
    })
  },[expenseId, navigation]);
  return (
    <View>
      <Text>All expense {expenseId}</Text>
    </View>
  );
};
export default ManageExpensesScreen;
