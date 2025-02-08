import { View, Text, TextInput } from "react-native";
import { manageExpensesScreenStyles } from "../styles/ManageExpensesScreenStyles";
import { useLayoutEffect } from "react";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ManageExpensesScreen = ({ route,navigation }) => {
  const styles = manageExpensesScreenStyles();
  let expenseId = route.params.expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
        title: expenseId ? "Edit Expense" : "Add Expense"
    })
  },[expenseId, navigation]);
  return (
    <View style={styles.container}>
      <ExpenseForm />
    </View>
  );
};
export default ManageExpensesScreen;
