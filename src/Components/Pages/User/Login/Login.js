import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';

const Login = () =>
{
    const location = useLocation();
    const history = useHistory();
    const { setUser, googleSignIn} = useAuth();

    const googleSignInHandle = () =>
    {
        googleSignIn()
            .then(result =>
            {
                setUser(result.user)
                history.push(location.state?.from || '/')
            })
    }
    return (
        <div>
            <button onClick={googleSignInHandle}>Google</button>
        </div>
    );
};

export default Login;