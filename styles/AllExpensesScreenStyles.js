import { StyleSheet } from "react-native"
import { GlobalStyles } from "../constants/styles";

export const allExpensesScreenStyles = () => {
    return StyleSheet.create({

    });
}

export const expenseOutputStyles = () => {
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

export const expenseSummaryStyles = () => {
    return StyleSheet.create({
        container:{
            padding:8,
            backgroundColor:GlobalStyles.colors.primary50,
            borderRadius:6,
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:'center'
        },
        period:{
            fontSize:12,
            color: GlobalStyles.colors.primary400
        },
        sum:{
            fontSize:16,
            fontWeight: 'bold',
            color:GlobalStyles.colors.primary500
        }
    });
}

export const expenseListStyles = () => {
    return StyleSheet.create({
        pressed:{
            opacity:0.5
        },
        listItemContainer:{
            flexDirection: 'row',
            padding:12,
            marginVertical:8,
            justifyContent:"space-between",
            backgroundColor:GlobalStyles.colors.primary500,
            borderRadius:8,
            elevation:4
        },
        textBase:{
            color:GlobalStyles.colors.primary50,
        },
        description:{
            fontSize:16,
            marginBottom: 4,
            fontWeight: 'bold'
        },
        priceContainer:{
            paddingHorizontal:12,
            paddingVertical:2,
            backgroundColor:'white',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:4,
            minWidth:80
        },
        amontText:{
            color:GlobalStyles.colors.primary500,
            fontWeight:'bold'
        }
    });
}