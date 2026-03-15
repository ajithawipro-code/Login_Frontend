import { useContext,useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Signup(){

 const {signup} = useContext(AuthContext);

 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const navigate = useNavigate();

 const handleSignup = ()=>{
  signup({name,email,password});
  navigate("/login");
 };

 return(
  <>
   <input onChange={(e)=>setName(e.target.value)} />
   <input onChange={(e)=>setEmail(e.target.value)} />
   <input onChange={(e)=>setPassword(e.target.value)} />
   <button onClick={handleSignup}>Signup</button>
  </>
 );
}

export default Signup;