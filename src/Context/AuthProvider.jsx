import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

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
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)

        })
        return ()=>{
            unSubscribe();
        }
    },[])



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