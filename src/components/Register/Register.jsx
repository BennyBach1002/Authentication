import React, { useState } from 'react'
import "./Register.css"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const registerUser = (e) => {
        e.preventDefault();
        if (password !== cPassword) {
            window.alert("Passwords do not match.");
        }
    
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.alert("Registration Successful...")
          })
          .catch((error) => {
            window.alert(error.message);
          });
      };
    return(       
        <div className='Register__container'>
            <form onSubmit={registerUser}>
                <h2>Register</h2>
                <h4>Email:</h4>
                <input 
                type="email" 
                placeholder='example@email.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                <h4>Password:</h4>
                <input 
                type="password"  
                value={password}
                placeholder='**********'
                onChange={(e) => setPassword(e.target.value)}/>
                <h4>Confirm Password:</h4>
                <input 
                type="password"
                value={cPassword}  
                placeholder='**********'
                onChange={(e) => setCPassword(e.target.value)}/>
                <div className="submit__box">
                    <input type="checkbox" />
                    <h4>Show password</h4>
                    <button id='mainBtn' type='submit'>Create Account</button>
                </div>    
                <button id='altBtn'>Already Have An Account?</button>
            </form>
        </div>
    )
}

export default Register