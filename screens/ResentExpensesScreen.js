import { View, Text } from "react-native";
import { manageOverviewScreenStyles } from "../styles/ManageOverviewScreenStyles";
import ExpensesOutput from "../components/ExpensesOutput";


const ResentExpensesScreen = ({navigation}) => {

    const styles = manageOverviewScreenStyles();
    return <ExpensesOutput expensePeriod=" Last 7 Days"/>
}
export default ResentExpensesScreen;