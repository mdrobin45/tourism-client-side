import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';

const Login = () =>
{
    const location = useLocation();
    const history = useHistory();
    const { setUser,setIsLogin, googleSignIn} = useAuth();

    // Handle Google sign in
    const googleSignInHandle = () =>
    {
        googleSignIn()
            .then(result =>
            {
                setUser(result.user)
                history.push(location.state?.from || '/')
                
            }).finally(() =>
            {
                setIsLogin(false);
            })
    }
    return (
        <div>
            <button onClick={googleSignInHandle}>Google</button>
        </div>
    );
};

export default Login;