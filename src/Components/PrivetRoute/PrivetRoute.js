import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) =>
{
    const { user,isLogin } = useAuth();
    if (isLogin) {
        return children;
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? (children) : (<Redirect to={{ pathname: '/login', state: { from: location } }} />)}
        />
    );

};

export default PrivetRoute;