import { View } from "react-native";
import { expenseOutputStyles } from "../styles/AllExpensesScreenStyles";
import Summary from "./ExpenseOutput/Summary";
import ExpenseList from "./ExpenseOutput/ExpenseList";
const DUMMY_EXPENSES = [
    {
        id: Math.random().toString(),
        description: "A Pair of Shoes",
        amount: 59.99,
        date: new Date('2025-01-28')
    },
    {
        id: Math.random().toString(),
        description: "A Pair of trousers",
        amount: 89.99,
        date: new Date('2025-01-26')
    },
    {
        id: Math.random().toString(),
        description: "Bananas",
        amount: 5.99,
        date: new Date('2025-01-22')
    },
    {
        id: Math.random().toString(),
        description: "A Book",
        amount: 14.99,
        date: new Date('2025-01-16')
    },
    {
        id: Math.random().toString(),
        description: "Anothr Book",
        amount: 18.99,
        date: new Date('2025-01-12')
    }
]
const ExpensesOutput = ({expenses, expensePeriod}) => {
    const styles = expenseOutputStyles();
    return <View style={styles.container}>
        <Summary periodName={expensePeriod} expenses={DUMMY_EXPENSES} />
        <ExpenseList expenses={DUMMY_EXPENSES}/>
    </View>
}
export default ExpensesOutput;