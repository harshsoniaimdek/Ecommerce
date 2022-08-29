import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../Components/Loader";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const login = async () => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem('currentUser' , JSON.stringify(result))
      setLoading(false);
      toast.success("Login successfull");
      window.location.href='/'
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
      setLoading(false);
    }
  };
  return (
    <div className="login-parent">
      {loading && <Loader />}
      <div className="row justify-content-center">
        <div className="col-md-4 z1">
          <div className="login-form">
            <h2>Login</h2>

            <hr />

            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            

            <button className="my-3" onClick={login}>Login</button>

            <hr />

            <Link to='/register'>Click Here To Register</Link>
          </div>
        </div>
      </div>

      <div className="login-bottom"></div>
    </div>
  );
}

export default LoginPage;