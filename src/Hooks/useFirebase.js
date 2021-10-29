import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/FirebaseInit";
initializeAuthentication();


const useFirebase = () => {
    const googleprovider = new GoogleAuthProvider();
    const auth = getAuth();
    const[user,setUser]=useState({})
    const[isLoading,setIsLoading]=useState(true);
    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleprovider)
        // .then(result => {
        //     setUser(result.user);
        // })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
    }
        ,[]);



        const logout = () => {
            setIsLoading(true)
            signOut(auth).then(() => {
                setUser({})
            }).finally(() => setIsLoading(false))}

            return {
        googleSignIn,logout,user,setIsLoading, isLoading
      
    };
};

export default useFirebase;