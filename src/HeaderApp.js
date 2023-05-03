import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function HeaderApp() {
  const authContext = useContext(AuthContext);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    authContext.setAuth({});
  }

  return (
    <div>
      <nav className="navbar bg-body-tertiary mt-2">
        <div className="container-fluid">
          <a className="navbar-brand h1">React Hooks</a>

          <span>
            {authContext.auth.email ? (
              <div>
                {authContext.auth.email}
                <button className="btn btn-outline-danger" onClick={logout}>
                  Log out
                </button>
              </div>
            ) : (
              "You Need To Login"
            )}
          </span>
        </div>
      </nav>
    </div>
  );
}
