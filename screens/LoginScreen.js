import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { loginUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const onLoginHandler = async({email, password}) => {
    try{
      setIsLoading(true);
      const response = await loginUser(email,password);
      console.log(response.data.idToken);
      setIsLoading(false);
      await AsyncStorage.setItem("token",response.data.idToken);
    }catch(err){
      console.log(err);
      setIsLoading(false);
    }
  }
  if(isLoading){
    return <LoadingOverlay message={"Creating user...."} />;
  }
  return <AuthContent isLogin onAuthenticate={onLoginHandler} />;
}

export default LoginScreen;
