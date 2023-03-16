import './App.css'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import UpdateProfile from './components/UpdateProfile/UpdateProfile'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CurrentProfile from './components/CurrentProfile/CurrentProfile'

function App() {

  return (
    <>
            <BrowserRouter>
        <Header />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/updateprofile' element={<UpdateProfile/>}/>
        <Route path='/register' element={<Register/> }/>
        <Route path='/profile' element={<CurrentProfile/> }/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
