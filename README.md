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
## ```navigate()``` vs ```push()```
Think of your app as a stack of pages(like a deck cards). Each timr you move to a new screen, it's either **replacing** the top card(`navigate()`) or **adding a new one** on top(`push()`)

### ```navigate('profile)```(Reuses or Adds)
### Summary
- `navigation.navigate('RouteName')` pushes a new route to the native stack navigator if you are not already on that route
- We can call `navigation.push('RouteName)` as many times as we like and it will continue pusing routes
- The header bar will automatically show a back button, but you can programmatically go back by calling `navigation.goBack()`
- The `navigation` object is available to all the screen components with the `useNavigation` hook

### Navigate from the component inside the Screen
```

const DetailsScreenComponent () => {
    const navigation = useNavigation()

    cosnt onMoveHomePageHandler = () => {
        navigation.navigate('Home')
    }
}
```

## Pass Date between Screens

```
navigation.navigate("Details",{itemId: 42})
```
