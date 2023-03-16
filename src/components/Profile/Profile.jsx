import React from 'react'
import "./Profile.css"

const Profile = () => {
    const updateProfile = () => {

    }
  return (
    <div className='Profile__container'>
    <form onSubmit={updateProfile}>
        <h2>Profile</h2>
        <h4>Full name:</h4>
        <input 
        type="text" 
        placeholder='Name'
        />
          <h4>Day Of Birth:</h4>
        <input 
        type="date" 
        placeholder='dd/mm/yy'
        />
          <h4>Email:</h4>

        <input type="file"
        accept="image/png, image/jpeg"
        />

        <h4>Profile Picture:</h4>
        <input 
        type="text" 
        placeholder='Name'
        />

        <h4>Phone Number:</h4>
        <input 
        type="tel"
        placeholder='+84'
        />
        <button id='mainBtn' type='submit'>Update Profile</button>
     
    </form>
</div>
  )
}

export default Profile