import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDU9kMPgVo_ioDLGR6zXU9f9wPlbHN4qq0",
  authDomain: "authentication-kyanon.firebaseapp.com",
  projectId: "authentication-kyanon",
  storageBucket: "authentication-kyanon.appspot.com",
  messagingSenderId: "693272388571",
  appId: "1:693272388571:web:2a1d6d13ef7e640499fdfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app;
