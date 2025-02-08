import { View, Text, TextInput } from "react-native";
import { manageExpensesScreenStyles } from "../styles/ManageExpensesScreenStyles";
import { useLayoutEffect } from "react";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ManageExpensesScreen = ({ route,navigation }) => {
  const styles = manageExpensesScreenStyles();
  let expenseId = route.params.expenseId;
  let action = route.params.action;
  useLayoutEffect(() => {
    navigation.setOptions({
        title: expenseId ? "Edit Expense" : "Add Expense"
    })
  },[expenseId, navigation]);
  return (
    <View style={styles.container}>
      <ExpenseForm action={action} id={expenseId} />
    </View>
  );
};
export default ManageExpensesScreen;
