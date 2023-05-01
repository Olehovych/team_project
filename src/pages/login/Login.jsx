import React from "react";
import "./Login.scss";
const Login = () => {
  const verify = () => {
    alert("Please, verify your email");
  };
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
              <button id="createAccount" onClick={verify}>
                Create Account
              </button>{" "}
              <br />
              <button id="createAccountGoogle">
                {" "}
                <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-385252404%3A1682497935874733&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=AQMjQ7RglP2n7gjvkHV557cr-PFriZRtX_Ex96PLdGlLuxmu1DZZ92S-FFywWyEikGd4UJvUwTc3Kw&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                  Sign up with Google
                </a>
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
