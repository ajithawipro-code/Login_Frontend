import { useContext,useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login(){

 const {login} = useContext(AuthContext);
 const navigate = useNavigate();

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const handleLogin = ()=>{
  login({email,password});
  navigate("/tasks");
 };

 return(
  <>
   <input onChange={(e)=>setEmail(e.target.value)} />
   <input onChange={(e)=>setPassword(e.target.value)} />
   <button onClick={handleLogin}>Login</button>
  </>
 );
}

export default Login;