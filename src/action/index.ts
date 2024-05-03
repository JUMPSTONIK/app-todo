"use server";

import { login } from "@/services/login";
import { getToken, removeToken, setToken } from "@/utils/Auth/handleToken";


export const handleLogin = async (formData: FormData): Promise<string> => {

  const response = await login(formData)
  if (response?.user_token){
    setToken(response.user_token)
    return ""
  }
  console.log(response)
  return response.message
};

export const validateToken = async () =>{
    if(getToken()){
        return true
    }else{
        return false
    }
}

export const logout = async () =>{
    removeToken()
}
