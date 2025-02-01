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
- If `Profile` **already exists** in the stack. it **reuses** it instead of adding a new one
- If `Profile` **does not exists** in the stack. it **add** a new one

**Behavior Example**
1. Start on **Home**
2. ``navigate('Profile')`` --> Moves to **Profile** ```[Home -> Profile]```
3.``navigate('Profile')`` again --> **Stays on the same Profile screen(No duplicate)**  ```[Home -> Profile]```

**Code Example**
```
navigation.navigate('Profile', {userId: 1}); // Moves to Profile
navigation.navigate('Profile', {userId: 2}); // Stays on the same Profile screen and updates userId
```

### ```push('profile)```(Always Adds a New one)
- it **ALWAYS adds** a new instance of ``Profile``, even if you are already on a ``Profile`` wssSAa

**Behavior Example**
1. Start on **Home**
2. ``navigate('Profile')`` --> Adds a new **Profile**  ``[Home -> Profile]```
3.``navigate('Profile')`` again --> **Adds another Profile screen on top** ``[Home -> Profile -> Profile]```
4. Press back --> Removes the last Profile screen and goes to the previous Profile instance
```
navigation.push('Profile', { userId: 1 }); // Opens Profile (userId: 1)
navigation.push('Profile', { userId: 2 }); // Opens a NEW Profile (userId: 2)
```

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
