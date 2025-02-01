# DIMENSIONS API

### useWindowDimension

: It automatically updates the width & height values when the screen size changes

```
import {useWindowDimensions} from 'react-native'

const component = (props) => {
    //we will call this function inside the body of the function.
    const {width, height} = useWindowDimensions()
}

```

### use case
```
//component.js
import {useWindowDimensions} from 'react-native'
const ComponentScreen = () => {
    const {width, height} = useWindowDimensions()

    const styles = componentScreenStyes(width, height);
}

//componentScreenStyle.js
export const componentScreenStyles = (width, height) => {
    return StyleSheet.create({

    })
}

```





