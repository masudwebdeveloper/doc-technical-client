import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true)

   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const userUpdateProfile = (profile) => {
      setLoading(true)
      return updateProfile(auth.currentUser, profile);
   }

   const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (currentUser === null) {
            setUser(currentUser)
         }
         setLoading(false);
      })
      return () => unsubscribe();
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
      createUser,
      userUpdateProfile
   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;