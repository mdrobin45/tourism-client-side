import React from 'react';
import { Route } from 'react-router';

const PrivetRoute = ({ children, ...rest }) =>
{
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={({location})=>{}}
        />
    );
};

export default PrivetRoute;