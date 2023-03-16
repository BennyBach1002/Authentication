import React, { useState } from "react";
import "./Register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      window.alert("Passwords do not match.");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        window.alert("Registration Successful...");
        navigate("/profile");
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };
  return (
    <div className="Register__container">
      <form onSubmit={registerUser}>
        <h2>Register</h2>
        <h4>Email:</h4>
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h4>Password:</h4>
        <input
          type={showPass ? "text" : "password"}
          value={password}
          placeholder="**********"
          onChange={(e) => setPassword(e.target.value)}
        />
        <h4>Confirm Password:</h4>
        <input
          type={showPass ? "text" : "password"}
          value={cPassword}
          placeholder="**********"
          onChange={(e) => setCPassword(e.target.value)}
        />
        <div className="submit__box">
          <input type="checkbox" onClick={() => setShowPass(!showPass)} />
          <h4>Show password</h4>
          <button id="mainBtn" type="submit">
            Create Account
          </button>
        </div>
        <Link to="/">
          <button id="altBtn">Already Have An Account?</button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
