import { StyleSheet } from "react-native"
import { GlobalStyles } from "../constants/styles";

export const manageExpensesScreenStyles = () => {
    return StyleSheet.create({
        container:{
            flex:1,
            paddingHorizontal:24,
            paddingTop:12,
            paddingBottom:0,
            backgroundColor:GlobalStyles.colors.primary700
        }
    });
}

export const manageExpenseFormStyles = () => {
    return StyleSheet.create({
        container:{
            flex:1,
            paddingHorizontal:24,
            paddingTop:12,
            paddingBottom:0,
            backgroundColor:GlobalStyles.colors.primary700
        }
    });
}