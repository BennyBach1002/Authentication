import React, { useState } from "react";
import "./Login.css";
import { auth } from "../../firebase/config";
import {signInWithEmailAndPassword } from "firebase/auth";
import {MdOutlineVisibility} from 'react-icons/md'
import {MdOutlineVisibilityOff} from 'react-icons/md'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        window.alert("Login Successful...");
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };
  
  return (
    <div className="Login__container">
      <form onSubmit={loginUser}>
        <h2>Login</h2>
        <h4>Email:</h4>
        <input
          type="email"
          placeholder="example@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h4>Password:</h4>
        <input
          type="password"
          placeholder="**********"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="submit__box">
          <input type="checkbox" />
          <h4>Show password</h4>
          <button id='mainBtn' type="submit">Sign In</button>
        </div>
        <button id="altBtn">Don't Have An Account?</button>
      </form>
    </div>
  );
};

export default Login;
