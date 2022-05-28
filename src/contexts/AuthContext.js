import React, { useContext, useState, useEffect } from "react"

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile,updateEmail, updatePassword} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";














const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID

  apiKey: "AIzaSyBFAQPp9L2oPPwcvWwhArFkmxp5HmJgTD4",
  authDomain: "solruf-auth.firebaseapp.com",
  projectId: "solruf-auth",
  storageBucket: "solruf-auth.appspot.com",
  messagingSenderId: "873550898277",
  appId: "1:873550898277:web:ea6c8a81d82b04a515528c"


}
console.log("frwffrfewfdwfwfw")
const app= firebase.initializeApp(firebaseConfig);







const AuthContext = React.createContext()
const auth1 = getAuth();
const storage = getStorage();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    
    return createUserWithEmailAndPassword(auth1,email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth1, email, password)
  }

  function logout() {
    return signOut(auth1)
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth1, email)
  }


  async function upload(file, currentUser, setLoading){
    const fileRef = ref(storage, currentUser.uid + '.png');

    setLoading(true);
    
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);
  
    updateProfile(currentUser, {photoURL});
    
    setLoading(false);
    alert("Uploaded file!");
  }

  
  // function updateProfile(currentUser,)
  // function updatEmail(email) {
  //   return updateEmail(auth1,email)
  // }

  // function updatPassword(password) {
  //   return updatePassword(auth1,password)
  // }

  useEffect(() => {
    const unsubscribe = auth1.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    upload,
    
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}