import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export default function LoginApp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authContext = useContext(AuthContext);

  function login(e) {
    e.preventDefault();
    // console.log({ email, password });
    // send api request to validate data and get token
    if (password === "123") {
      const token = "abc";
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      authContext.setAuth({ token, email });
    } else {
      alert("wrong details");
    }
  }

  return (
    <div>
      <form>
        <h2>Login</h2>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
}
