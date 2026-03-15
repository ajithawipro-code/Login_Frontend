import { createContext,useState } from "react";
import { signupAPI,loginAPI } from "../api/axios.api";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

 const [isAuth,setIsAuth] = useState(false);

 const login = async(data)=>{

  const res = await loginAPI(data);

  localStorage.setItem("token",res.data.token);

  setIsAuth(true);
 };

 const signup = async(data)=>{
  await signupAPI(data);
 };

 const logout = ()=>{
  localStorage.removeItem("token");
  setIsAuth(false);
 };

 return(
  <AuthContext.Provider value={{login,signup,logout,isAuth}}>
   {children}
  </AuthContext.Provider>
 );
};