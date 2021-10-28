import initializeFirebaseApp from "../Firebase/firebase.init";
import {GoogleAuthProvider,getAuth,signInWithPopup} from "firebase/auth";
import { useState } from "react";



initializeFirebaseApp();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>
{
    const [user, setUser] = useState({});


    // Sign in with google
    const googleSignIn = () =>
    {
        signInWithPopup(auth, googleProvider)
            .then((result) =>
            {
                setUser(result.user)
            })
    }

    return {
        googleSignIn,
        user
    }
};

export default useFirebase;