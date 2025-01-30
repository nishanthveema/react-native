import { FlatList, View, Text } from "react-native";
import { expenseListStyles } from "../../styles/AllExpensesScreenStyles";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({expenses}) => {
    const styles = expenseListStyles();
    const onRenderItemHandler = ({index, item}) => {
        return <ExpenseItem item={item}/>
    }
    return <FlatList data={expenses} keyExtractor={(item) => item.id} renderItem={onRenderItemHandler} />
}
export default ExpenseList;