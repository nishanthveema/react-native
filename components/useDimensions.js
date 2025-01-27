import { useEffect, useState } from "react"
import { Dimensions } from "react-native";

const useDimensions = () => {
    const [dimensions, setDimensions] = useState(Dimensions.get("window"));
    useEffect(() => {
        const onChange = ({window}) => {
            setDimensions(window);
        }
        const subscritions = Dimensions.addEventListener("change", onChange);
        return () => subscritions.remove();
    },[]);
    return dimensions;
}
export default useDimensions;