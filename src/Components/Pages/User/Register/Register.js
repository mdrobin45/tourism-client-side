import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import googleIcon from '../../../images/google.png'
import regiVector from '../../../images/2853458.jpg'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Register = () =>
{
     // Login in button custom style
  const LoginButtonStyle = styled(Button)({
    background: '#7C3AED',
    width: '100%',
    padding: '15px 0',
    fontSize: '17px',
    '&:hover': {
      background: 'black'
    }
  });
    
    const location = useLocation();
    const history = useHistory();
    const { getEmail, error,setUser,setIsLogin, getPassword, registerWithEmailAndPassword,setError, googleSignIn } = useAuth();

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
            }).catch(error =>
                {
                    setError(error.message);
                })
    }
    // Handle Password register
    const handlePasswordRegister = () =>
    {
        registerWithEmailAndPassword()
            .then(result =>
            {
                setUser(result.user)
                history.push(location.state?.from || '/')
                
            }).finally(() =>
            {
                setIsLogin(false);
            }).catch(error =>
                {
                    setError(error.message);
                })
    }
    
    return (
        <div className='md:flex py-32 container justify-between'>
            <div className='md:w-2/4'>
                <img className='md:w-10/12' src={regiVector} alt="Login Vector" />
            </div>

            <form className='m-auto rounded p-10 shadow-2xl md:w-2/4'>
                <h2 className='font-bold pb-6 text-3xl text-center'>Please Register</h2>
                <strong className='font-bold text-lg py-3 text-center text-red-600'>{error}</strong>
                <div>
                <TextField onBlur={getEmail} required fullWidth type='email' label="Email" id="fullWidth" />
                </div>

                <div className='my-4'>
                <TextField onBlur={getPassword} required fullWidth type='password' label="Password" id="fullWidth" />
                </div>

                <div>
                <LoginButtonStyle onClick={handlePasswordRegister} size="large" variant="contained" endIcon={<PersonAddIcon />}>Register</LoginButtonStyle>
                </div>

                <hr />
                <div onClick={googleSignInHandle} className='flex shadow rounded-lg justify-center items-center mt-6 p-3 border-2 cursor-pointer'>
                <img className='w-10' src={googleIcon} alt="Continue with google" />
                <h3 className='text-2xl pl-3'>Continue with Google</h3>
                </div>
                
                <div className='text-center pt-3'>
                <NavLink style={{color:'#29D8DB'}} className='text-lg' to='/login'>Already User?</NavLink>
                </div>
            </form>
        </div>
    );
};

export default Register;