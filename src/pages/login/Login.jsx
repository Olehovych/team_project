import React from "react";
import "./Login.scss";
const Login = () => {
  return (
    <>
      <div id="App">
        <div id="left"></div>
        <div id="right">
          <p class="title">Create an account</p>
          <p class="subTitle">Let’s get started with your 30 days free trial</p>
          <div id="loginForm">
            <form action="">
              <p className="logInput">Name</p>
              <input type="text" className="loginForm" />
              <p className="logInput">Email</p>
              <input type="text" className="loginForm" />
              <p className="logInput">Password</p>
              <input type="text" className="loginForm" /> <br />
              <button id="createAccount">Create Account</button> <br />
              <button id="createAccountGoogle">
                Sign up with Google
                {/* <img src={googleLogo}></img>Sign up with Google */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
