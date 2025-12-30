import "../style/reset.css";
import "../style/Register.css";
import { useState } from "react";
import { registerUser } from "./storage";
import { toast, ToastContainer } from "react-toastify";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlesubmit(e) {
    e.preventDefault();

    if (!username || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    const result = registerUser(username, email, password);

    if (!result.success) {
      toast.error(result.message);
    } else {
      toast.success("Register successful");
    }
  }

  return (
    <>
      <div className="layout">
       
        <main className="content">
          <div className="container">
            <div className="register-box">
              <h2>Create Account</h2>
              <p className="subtitle">Join us today </p>

              <form onSubmit={handlesubmit}>
                <div className="input-group">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </main>
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
export default Register;
