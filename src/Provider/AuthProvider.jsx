import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../Components/Firebase/Firebase.config'
// import app from "../Firebase/Firebase.config";

const auth = getAuth(app)
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)


    const provider=new GoogleAuthProvider;
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleRegister=()=>{
        return signInWithPopup(auth,provider)
    }
    const logOut=()=>{
        return signOut(auth)
    }
   useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
    })
    return ()=>{
        return unsubscribe;
    }
   },[])
    const authInfo = { user,createUser,googleRegister,logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;