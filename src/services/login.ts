
import { urls } from "./urls";

export const login = async(loginData:FormData) =>{
    try {
        let response = await fetch( urls.auth.login, {
          method: "POST",
          body: loginData
        });
        const data = await response.json();
        return data
      } catch (error) {
        console.log(error);
      }
}