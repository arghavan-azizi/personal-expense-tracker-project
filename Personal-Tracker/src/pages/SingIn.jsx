import { useState } from "react";
import "../style/reset.css";
import "../style/SingIn.css";
import { singInUser } from "./storage";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handlesubmit(e) {
    e.preventDefault();

   
    if (!email.trim() || !password.trim()) {
      toast.error("Please fill all fields");
      return;
    }


    const result = singInUser(email.trim(), password);

    if (!result.success) {

      toast.error(result.message || "Email or password is incorrect");

    } else {

      toast.success(result.message || "SignIn successful");

      setTimeout(() => {
        navigate("/");
        setEmail("");
        setPassword("");
      }, 500);
    }
  }

  return (
    <>
      <div className="login-box">
        <h2>Sign In</h2>
        <p className="subtitle">Welcome back</p>

        <form onSubmit={handlesubmit} autoComplete="off">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>

          <button type="submit">Sign In</button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default SignIn;