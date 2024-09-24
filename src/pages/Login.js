import React from "react";

import Nav from "../composants/nav/Nav";
import Auth from "../composants/auth/Auth";

const Login = () => {
  return (
    <div>
      <Nav />
      <div className="login-container-page">
        <Auth />
      </div>
    </div>
  );
};

export default Login;
