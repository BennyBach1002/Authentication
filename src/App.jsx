import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'

function App() {

  return (
    <div className="app">
      <Header />
      <Profile/>
      {/* <Login /> */}
      {/* <Register/> */}
    </div>
  )
}

export default App
