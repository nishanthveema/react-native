# REACT NAVIGATION

## Navigate between Screens

### Navigate from the Screen
```
export default function App(){
    return <NavigationContainer>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
    </NavigationContainer>
}
const DetailsScreen ({navigation}) => {
    navigation.navigate('Home')
}
```

### Navigate from the component inside the Screen
```

const DetailsScreenComponent () => {
    const navigation = useNavigation()

    cosnt onMoveHomePageHandler = () => {
        navigation.navigate('Home')
    }
}
```
