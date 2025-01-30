import { Text, View } from "react-native";
import { allExpensesScreenStyles } from "../styles/AllExpensesScreenStyles";
import ExpensesOutput from "../components/ExpensesOutput";

const AllExpensesScreen = () => {
    const styles = allExpensesScreenStyles();
    return <ExpensesOutput expensePeriod="Total" />
}
export default AllExpensesScreen;