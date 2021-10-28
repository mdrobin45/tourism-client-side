import initializeFirebaseApp from "../Firebase/firebase.init";
import {GoogleAuthProvider,getAuth,signOut ,signInWithPopup,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";



initializeFirebaseApp();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>
{
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);

    // Sign in with google
    const googleSignIn = () =>
    {
        return signInWithPopup(auth, googleProvider)
            /* .then((result) =>
            {
                setUser(result.user)
            }) */
    }

    // On auth state change
    useEffect(() =>
    {
        onAuthStateChanged(auth, (user) =>
        {
            if (user) {
                setUser(user)
                setIsLogin(true);
            }
        })
    }, [])
    
    // Sign Out
    const logOut = () =>
    {
        signOut(auth).then(() =>
        {
            console.log('Logged out');
        })
    }
    return {
        googleSignIn,
        user,
        isLogin,
        setUser,
        logOut
    }
};

export default useFirebase;