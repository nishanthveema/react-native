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
2. ``navigate('Profile')`` --> Adds a new **Profile**  ```[Home -> Profile]```
3.``navigate('Profile')`` again --> **Adds another Profile screen on top** ```[Home -> Profile -> Profile]```
4. Press back --> Removes the last Profile screen and goes to the previous Profile instance
```
navigation.push('Profile', { userId: 1 }); // Opens Profile (userId: 1)
navigation.push('Profile', { userId: 2 }); // Opens a NEW Profile (userId: 2)
```


## ```navigation.goBack()``` vs ```navigation.popTo('RouteName')```
1. ```navigation.goBack()```
  - Goes back **one step** in the navigation stack
  - Works like pressing the back button- If there is no previous screen in the stack, it does nothing
  - **Use case:** When you want to go back to the immediate previous screen

2. ```navigation.popTo('RouteName')```
  - Removes all screens above ```RouteName``` from the stack
  - Navigates directly to ```RouteName```, ensuring it's the top screen
  - If ```RouteName``` isn't in the stack, it may not Works
  - **Use Case:** When you want to navigate back multiplt steps, skipping intermediate screens

### Summary
- `navigation.navigate('RouteName')` pushes a new route to the native stack navigator if you are not already on that route
- We can call `navigation.push('RouteName)` as many times as we like and it will continue pusing routes
- The header bar will automatically show a back button, but you can programmatically go back by calling `navigation.goBack()`
- The `navigation` object is available to all the screen components with the `useNavigation` hook
- You can go back to an existing screen in the stack with ``navigation.popTo('RouteName')``, and you can go back to the first screen in the stack with ``navigation.popToTop()``

# Navigate from the component inside the Screen
```
const DetailsScreenComponent () => {
    const navigation = useNavigation()

    cosnt onMoveHomePageHandler = () => {
        navigation.navigate('Home')
    }
}
```

## Pass Data between Screens

```
navigation.navigate("Details",{itemId: 42})
```
**Retrive Data in ``DetailsScreen``**
```
const DetailsScreen = ({route, navigation}) => {
    const {itemId} = route.params
}
```

**Retrive Data in ``DetailsScreen`` component**
```
const DetailsComponent = () => {
    const route = useRoute();
    const {itemId} = route.params
}
```

## Passing params to a previous screen
1. Using ```navigation.navigate``` to pass parameters
If you need to pass data back to the previous screen and update it immediately:
```
const handleGoBack = () => {
  navigation.navigate('ScreenName', {updateDate: 'value'})
}
```

2. Using ```navigation.goBack``` with ```setParams```
If the previous screen is already in memory and you just need to update its state:
```
const handlerGoBack = () => {
  navigation.setParams({updateData:"new value"})
  navigation.goBack();
}
```

**Best Method?**
- Use ``navigate`` if the previous screen needs to be re-rendered with new data
- Use ``goBack`` with ``setParams`` if the previous screen is still in memory and just needs an update

If you need to pass dta back to the pre
## Passing params to a nested screen
If you have nested navigators, you need to pass params a bit differently.

```
// Root Navigator
<Stack.Navigator>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Details" component={NestedNavigator} />
</Stack.Navigator>

// Nested Navigator
<Stack.Navigator>
  <Stack.Screen name="Profile" component={ProfileScreen} />
  <Stack.Screen name="Settings" component={SettingsScreen} />
</Stack.Navigator>

```

### Passing Parameters to a Nested Navigator

1. **Pass parameters to the Nested Navigator's Initial Screen**
When navigating to a nested navigator(``Details`` in this case), you can include the parameters in the ``navigate()`` function. These parameters will be passed to the **initial screen** of the nesred navigator.
```
navigation.navigate('Details',{userId: 123, userName: 'John'})
```

2. **Access Parameters in the Nested Navigator**
Inside the ``ProfileScreen``(the initial screen of the nested navigator), you can access the parameters using the route object
```
const ProfileScreen = ({route, navigation}) => {
    const{userId, userName} = route.params
}
```

2. **Pass Parameters Directly to a Screen in the Nested Navigator**
If you want to navigate directly to a specific screen inside the nested navigator ( eg, ``SettingsScreen``)
```
navigation.navigate('Details', {
    screen: "Settings", // Specify the screen inside the nested navigator
    params: {theme: 'dark'}  // Parameters for the nested screen
})
```
### Passing Parameters to Deeply Nested Screens
To pass parameters to a screen **inside the second nested navigator**, you need to specify the full path.
```
navigation.navigate('Home', {
  screen: 'Settings',
  params: {
    screen: 'Sound',
    params: {
      screen: 'Media',
      params:{key: value}
    },
  },
});
```
In above case, you're navigating to the ``Media`` screen, which is in a navigator nested inside the ``Sound`` screen, which is in a navigator nested inside the ``Settings`` screen.

### Rendering initial route defined in the navigator
```
<Stack.Navigator>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Dashboard" component={TabNavigator} />
</Stack.Navigator>

<Tab.Navigator initialRouteName="Profile">
  <Tab.Screen name="Profile" component={ProfileScreen} />
  <Tab.Screen name="Settings" component={SettingsScreen} />
</Tab.Navigator>
```
To go to the ProfileScreen(initialRouteName) in Dashboard
```
navigation.navigate('Dashboard', { initial: false, params: { userId: 123, name: 'John Doe' } });
or
navigation.navigate('Dashboard', { screen: "Profile", params: { userId: 123, name: 'John Doe' } });
```
