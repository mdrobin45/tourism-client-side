import React from 'react';
import useAuth from '../../../../Hooks/useAuth';

const Login = () =>
{
    const { user, googleSignIn } = useAuth();
    console.log(user);
    return (
        <div>
            <button onClick={googleSignIn}>Google</button>
        </div>
    );
};

export default Login;