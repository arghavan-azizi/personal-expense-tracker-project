import { useState } from "react";
import "../style/reset.css";
import "../style/SingIn.css";
import { singInUser } from "./storage";
import { toast, ToastContainer } from "react-toastify";

function SignIn() {
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handlesubmit(e){
  e.preventDefault();
   if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }
  const result=singInUser(email,password);
      if (!result.success) {
        toast.error(result.message);
      } else {
        toast.success("SingIn successful");
      }
  }
  return (
    <>

   <div className="login-box">
  <h2>Sign In</h2>
  <p className="subtitle">Welcome back</p>

  <form onSubmit={handlesubmit}>
    <div className="input-group">
      <label>Email</label>
      <input type="email" placeholder="example@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
    </div>

    <div className="input-group">
      <label>Password</label>
      <input type="password" placeholder="••••••••" value={password} onChange={(e)=>setPassword(e.target.value)} />
    </div>

    <button type="submit">Sign In</button>
  </form>
</div>

<ToastContainer />
        </>
    )
}
export default SignIn;