import { createContext } from "react";
import app from "../Firebase/Firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth=getAuth(app)
export const AuthContext=createContext(null);

const AuthProvider = () => {
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo={createUser}
    return (
        <AuthContext.Provider value={authInfo}></AuthContext.Provider>
    );
};

export default AuthProvider;