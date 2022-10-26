import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true)

   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const userUpdateProfile = (profile) => {
      return updateProfile(auth.currentUser, profile);
   }

   const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   }

   const signInWithFacebook = () => {
      setLoading(true)
      return signInWithPopup(auth, facebookProvider);
   }

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (user === null) {
            setUser(currentUser)
         }
         setLoading(false)
      })
      return () => {
         unSubscribe();
      }
   }, [])

   const logOut = () => {
      setLoading(true)
      return signOut(auth)
   }
   const authInfo = {
      user,
      signIn,
      logOut,
      setUser,
      loading,
      setLoading,
      createUser,
      signInWithGoogle,
      signInWithFacebook,
      userUpdateProfile
   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;