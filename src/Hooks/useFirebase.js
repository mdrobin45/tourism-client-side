import initializeFirebaseApp from "../Firebase/firebase.init";
import {GoogleAuthProvider,getAuth,signInWithEmailAndPassword ,signOut,createUserWithEmailAndPassword ,signInWithPopup,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";



initializeFirebaseApp();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>
{
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // Form submit
    const formSubmit = (e) =>
    {
        e.preventDefault();
    }

    // Get email
    const getEmail = (e) =>
    {
        const inputText = e.target.value;
        setEmail(inputText);
    }

    // Get Password
    const getPassword = (e) =>
    {
        const inputText = e.target.value;
        setPassword(inputText);
    }



    // Sign in with google
    const googleSignIn = () =>
    {
        return signInWithPopup(auth, googleProvider)
    }


     // Register with email and password
     const registerWithEmailAndPassword=() =>
     {
         return createUserWithEmailAndPassword(auth, email, password)
     }


    // Login with email and password
    const loginWithEmailAndPassword = () =>
    {
        return signInWithEmailAndPassword(auth, email, password)
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
    


    // Log out
    const logOut = () =>
    {
        signOut(auth).then(() => {
            setUser({})
            setIsLogin(false);
          }).finally(() =>
                setIsLogin(false)
            ).catch((error) => {
                setError(error.message)
          });
    }


    return {
        registerWithEmailAndPassword,
        loginWithEmailAndPassword,
        googleSignIn,
        user,
        isLogin,
        setUser,
        setError,
        setIsLogin,
        formSubmit,
        getEmail,
        error,
        getPassword,
        logOut
    }
};

export default useFirebase;