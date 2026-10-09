import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [uname,setUname]=useState("");
    const [pass,setPass]=useState("")
    const [error,setError]=useState("")
    
    const navigate=useNavigate();
    function handleLogin(e){
        e.preventDefault();
        if(uname==="admin" && pass==="manager"){
            localStorage.setItem("isAthenticated","true");
           navigate("/admin")
        }
        else if(uname==="user" && pass==="abes"){
            localStorage.setItem("isAthenticated","true");
               navigate("/user")
        }
        else{
            navigate("/")
            setError("Authentication Error: check user credentials")
        }
    }
  return (
    <div>
      <h1>SignIn Here</h1>
      <h2 style={{color: "red"}}>{error}</h2>
      <div className="login">
        <form onSubmit={handleLogin}>
        UserName:
        <input type="text"
              value={uname}
              placeholder="Enter the user name"
              onChange={(e)=>setUname(e.target.value)}/>
        <br/>   
        Password:
        <input type="password"
              value={pass}
              placeholder="Enter the Password"
              onChange={(e)=>setPass(e.target.value)}/>
        <br/>
        <button >SignIn</button>
        <button>Reset</button>   
        </form>
      </div>
    </div>
  )
}

export default Login
