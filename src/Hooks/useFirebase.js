import initializeFirebaseApp from "../Firebase/firebase.init";
import {GoogleAuthProvider,getAuth,signOut ,signInWithPopup,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";



initializeFirebaseApp();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>
{
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(true);

    // Sign in with google
    const googleSignIn = () =>
    {
        return signInWithPopup(auth, googleProvider)
    }

    // On auth state change
    useEffect(() =>
    {
        onAuthStateChanged(auth, (user) =>
        {
            if (user) {
                setUser(user)
            }
            setIsLogin(false);
        })
    }, [])
    
    // Sign Out
    const logOut = () =>
    {
        signOut(auth).then(() =>
        {
            setUser({});
            setIsLogin(false);
        }).finally(() =>
        {
            setIsLogin(false);
        })
    }
    return {
        googleSignIn,
        user,
        isLogin,
        setUser,
        setIsLogin,
        logOut
    }
};

export default useFirebase;