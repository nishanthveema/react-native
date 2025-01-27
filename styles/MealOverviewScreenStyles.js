import { StyleSheet } from "react-native"

export const mealsOverviewStylesScreenStyles = () => {
    return StyleSheet.create({
        container:{
            flex: 1,
            padding: 16
        }
    });
}

export const mealItemStyles = () => {
    return StyleSheet.create({
        mealItem:{
            margin:16,
            borderRadius: 10,
            overflow: 'hidden',
            backgroundColor: '#c4acac'
        },
        container:{
            flex: 1,
            padding: 16
        },
        image:{
            width: '100%',
            height: 200
        },
        title:{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18,
            margin:8
        },
        details:{
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 8,
            alignItems: 'center'
        },
        detailItem:{
            marginHorizontal:4,
            fontSize:12
        },
        innerContainer:{
            borderRadius: 8,
            overflow: 'hidden'
        },
        buttonPressed:{
            opacity: 0.5
        }
    });
}