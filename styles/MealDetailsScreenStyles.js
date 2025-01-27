import { StyleSheet } from "react-native"

export const mealDetailsScreenStyles = () => {
    return StyleSheet.create({
        container:{
            flex:1,
            padding:16,
        },
        details:{
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 8,
            alignItems: 'center'
        },
        detailItem:{
            marginHorizontal:4,
            fontSize:12,
            color:'white',
        },
        image:{
            width: '100%',
            height: 350
        },
        title:{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18,
            margin:8,
            color: 'white'
        },
        subtitle:{
            fontWeight: 'bold',
            fontSize: 24,
            margin:8,
            color: 'white',
            textAlign:"center"
        },
        subtitleContainer:{
            padding:6,
            margin:4,
            borderBottomColor: 'white',
            borderBottomWidth: 2
        },
        listItemContainer:{
            borderRadius:8,
            paddingHorizontal:8,
            paddingVertical:4,
            marginVertical:4,
            marginHorizontal:12,
            backgroundColor: '#e2b497',
        },
        listItem:{
            color: "#351401",
            textAlign:'center',

        }
    });
}