import React from 'react'
import "./Header.css"
import KyanonLogo from "../../assets/kyanon-logo.png"

const Header = () => {
  return (
    <div className='Header'>
        <img src={KyanonLogo} alt="Logo" />
        <div className="list__container">
            <h4>Login</h4>
            <h4>About Us</h4>
            <h4>Contact</h4>
            <h4>Career</h4>
        </div>
    </div>
  )
}

export default Header