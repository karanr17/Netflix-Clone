import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { doc, setDoc } from "firebase/firestore";
import { async } from '@firebase/util';


const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({})

    const signUp = async(email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        await setDoc(doc(db, "users", email), {
            savedMovies: []
        })
    }

    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={ {signUp, signIn, logOut, user} }>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}