import "./CurrentProfile.css";
import React, { useEffect, useState } from "react";
import { doc, getDoc, onSnapshot, setDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const CurrentProfile = () => {
  const [fullname, setFullname] = useState("");
  const [dob, setDob] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  
  const userId =auth.currentUser.uid
  
  const navigate = useNavigate()
  
  const unsub = onSnapshot(doc(db, "UserProfile",userId ), (doc) => {
    setFullname(doc.data().fullname)
    setDob(doc.data().dob)
    setProfilePic(doc.data().profilePic)
    setPhoneNum(doc.data().phoneNum)
    console.log(profilePic)
  });
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        window.alert("Logout successfully.");
        navigate("/");
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };
  return (
    <div className="cProfile__container">
        <div className="profile_options">
            <Link to="/profile">
            <button disabled>Profile</button>
            </Link>
            <Link to="/updateprofile">
            <button>Update Profile</button>
            </Link>
        </div>
      <form >
        <h2>Current Profile</h2>
        <h4>Full name:</h4>
        <input
          type="text"
          placeholder="Name"
          value={fullname}
          readOnly
        />
        <h4>Day Of Birth:</h4>
        <input
          type="date"
          placeholder="dd/mm/yy"
          value={dob}
          readOnly
        />
        <h4>Profile Picture:</h4>
        <div className="picContainer">
            <img src={profilePic} alt="Pic" />
        </div>

        <h4>Phone Number:</h4>
        <input
          type="tel"
          placeholder="+84"
          value={phoneNum}
          readOnly />
      </form>
      <button onClick={logoutUser}>Log Out</button>
    </div>
  );
};

export default CurrentProfile;
