import axios from "axios";

export const createUser = async(email,password) => {
    try{
        const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC2dm1w2FKD4rqvtktegoc5oRGbkFDw5D8",{
            email:email,
            password:password,
            returnSecureToken:true
        });
        return response;
    }
    catch(err){
       throw err;
    }
}

export const loginUser = async(email,password) => {
    try{
        const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC2dm1w2FKD4rqvtktegoc5oRGbkFDw5D8",{
            email:email,
            password:password,
            returnSecureToken:true
        });
        return response;
    }
    catch(err){
       throw err;
    }
}