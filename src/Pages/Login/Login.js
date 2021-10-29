import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    const { googleSignIn, setIsLoading, isLoading, user,logout } = useAuth() || {};
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
            }).finally(() => setIsLoading(false))
    }
    return (
        <div className="my-5">

            <h1 className="text-success">Please Login</h1>
            <Button onClick={handleGoogleLogin} variant="success">Google Sign in</Button>
            {user?.email && <div> <h6 className="text-success my-2">User Name:{user.displayName}</h6>
                <Button onClick={logout} variant='warning'>Logout</Button>
            </div>}


        </div>
    );
};

export default Login;