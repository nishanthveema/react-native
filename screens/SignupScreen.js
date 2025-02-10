import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { createUser } from '../util/auth';

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const signupHandler = async({email, password}) => {
    try{
      setIsLoading(true);
      const response = await createUser(email,password);
      setIsLoading(false);
      console.log(response);
    }catch(err){
      console.log(err);
      setIsLoading(false);
    }
  }
  if(isLoading){
    return <LoadingOverlay message={"Creating user...."} />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
