import { Text, View } from "react-native";
import { expenseSummaryStyles } from "../../styles/AllExpensesScreenStyles";

const Summary = ({periodName, expenses}) => {
  let styles = expenseSummaryStyles();
  const expensesSum = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};
export default Summary;
