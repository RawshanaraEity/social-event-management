import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup  } from "firebase/auth";
import  auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {


    // google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
        
    }

    // signup
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const info = {
        googleLogin,
        createUser
    }


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;