import { Text, View } from "react-native";
import { allExpensesScreenStyles } from "../styles/AllExpensesScreenStyles";
import ExpensesOutput from "../components/ExpensesOutput";
import { useEffect, useState } from "react";
import { getRequest } from "../constants/axios";

const AllExpensesScreen = () => {
    const [expenses, setExpenses] = useState([]);
    useEffect(() => {
        getExpenses();
    },[]);

    const getExpenses = async () => {
        try{
            const expenses = await getRequest();
            console.log(expenses);
            setExpenses(expenses);
        }catch(err){
            console.log(err);
        }
    }
    const styles = allExpensesScreenStyles();
    return <ExpensesOutput expensePeriod="Total" expenses={expenses} />
}
export default AllExpensesScreen;