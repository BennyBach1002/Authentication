import React, { useEffect, useState } from "react";
import "./UpdateProfile.css";
import { doc, getDoc, onSnapshot, setDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Profile = () => {
  const [fullname, setFullname] = useState("");
  const [dob, setDob] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [uuid, setUUid] = useState("");

  
  const userId = auth.currentUser.uid || "";
  useEffect(() => {
    setUUid(userId);
    console.clear();
  }, []);

  const navigate = useNavigate();
  const docData = {
    fullname: "",
    dob: "",
    profilePic: "",
    phoneNum: "",
  };
  const updateProfile = (e) => {
    try {
      const docRef = setDoc(doc(db, "UserProfile", userId), {
        fullname: fullname,
        dob: dob,
        profilePic: profilePic,
        phoneNum: phoneNum,
        uuid: uuid,
        createdAt: Timestamp.now().toDate(),
      });
      window.alert(" Update successfully.");
      navigate("/profile");
    } catch (error) {
      window.alert(error.message);
    }
  };

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
    <div className="Profile__container">
      <div className="profile_options">
        <Link to="/profile">
          <button>Profile</button>
        </Link>
        <Link to="/updateprofile">
          <button disabled>Update Profile</button>
        </Link>
      </div>
      <form onSubmit={updateProfile}>
        <h2>Profile</h2>
        <h4>Full name:</h4>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFullname(e.target.value)}
          required
        />
        <h4>Day Of Birth:</h4>
        <input
          type="date"
          placeholder="dd/mm/yy"
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <h4>Profile Picture:</h4>

        <input
          type="text"
          placeholder="URL"
          onChange={(e) => setProfilePic(e.target.value)}
          required
        />

        <h4>Phone Number:</h4>
        <input
          type="tel"
          placeholder="+84"
          onChange={(e) => setPhoneNum(e.target.value)}
          required
        />
        <button id="mainBtn" type="submit">
          Update Profile
        </button>
      </form>
      <button onClick={logoutUser}>Log Out</button>
    </div>
  );
};

export default Profile;
