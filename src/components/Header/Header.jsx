import React, { useEffect, useState } from 'react'
import "./Header.css"
import KyanonLogo from "../../assets/kyanon-logo.png"
import { auth } from "../../firebase/config";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot } from 'firebase/firestore';


const Header = () => {
  const [displayName, setdisplayName] = useState("");

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        if (user.displayName == null) {
          const u1 = user.email.slice(0, -10);
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setdisplayName(uName);
        } else {
          setdisplayName(user.displayName);
        }}
    });
  }, [ displayName]);
  
  return (
    <div className='Header'>
        <img src={KyanonLogo} alt="Logo"  />
    </div>
  )
}

export default Header