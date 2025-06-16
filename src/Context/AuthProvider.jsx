import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({children}) => {

const googleAuthProvider= new GoogleAuthProvider();
const[loading, setLoading]=useState(true)
const[user,setUser]=useState(null)

    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)

    }


    const logInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }

const logOutUser=()=>{
      setLoading(true)
      return signOut(auth)

}


const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleAuthProvider)
}
  

    useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
    setUser(null); 
    if (currentUser?.email) {
      try {
        const res = await axios.get(`http://localhost:3000/users/${currentUser.email}`);
        const dbUser = res.data;
        setUser({
          ...currentUser,
          displayName: currentUser.displayName || dbUser?.name,
          name: dbUser?.name || currentUser.displayName,
          role: dbUser?.role || 'normal', 
        });
      } catch (err) {
        console.error('Failed to fetch user role:', err);
      }
    } else {
      setUser(null);
    }
    setLoading(false);

  //   if(currentUser?.email){
  //       const userData={email:currentUser.email};
  //       axios.post('http://localhost:3000/jwt',userData,{
  //           withCredentials:true
  //       })
        
  //       .then(res=>{
  //           console.log(res.data)
  //       })
  //       .catch(error=>console.log(error))
  //   }
   });

  return () => unSubscribe();
}, []);



    const authInfo={
        loading,
        createUser,
        logInUser,
        user,
        logOutUser,
        googleSignIn



    }
    return (
      <AuthContext.Provider value={authInfo}>

               {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;