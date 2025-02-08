
import axios from 'axios';
const API_URL = "https://react-native-ea578-default-rtdb.firebaseio.com"

export const postRequest = async (data) => {
    try{
        const response = await axios.post(`${API_URL}/expenses.json`, data);
        return response.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

export const getRequest = async () => {
    try{
        const response = await axios.get(`${API_URL}/expenses.json`);
        let expenses = [];
        for(let key in response.data){
            expenses.push({
                id: key,
                ...response.data[key],
                date: new Date(response.data[key].date)
            });
        }
        return expenses;
    }catch(err){
        console.log(err);
        throw err;
    }
}