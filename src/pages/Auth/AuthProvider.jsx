import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./../../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading ,setLoading]=useState(true)
// console.log(user)
  // creat  user [Register]
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  update User 
  const updateUserProfile=(displayName,photoURL)=>{
    setLoading(true)
    return updateProfile(auth.currentUser, {displayName, photoURL})
  }
  //Login   user [loing ]
  const signInUser = (email, password) => {
      setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
// logout
const logout =()=>{
    setLoading(true)
    return signOut(auth)
}

  //  Google with login
  const signInWithGoogle = () => {
     setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };



  //user  ar man update  hobe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    signInWithGoogle,
    signInUser,
    logout,
    updateUserProfile,
    loading,
    setLoading
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
