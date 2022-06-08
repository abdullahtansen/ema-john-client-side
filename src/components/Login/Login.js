import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/shop';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_url);
        })
    }

    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='Enter your Email' />
                    <br />
                    <input type="password" name='' id='' placeholder='Enter your '/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john Website? <Link to="/register">Create Account</Link></p>
                <div>-------------or------------</div>
                <button className='btn-regular'
                onClick={handleGoogleLogin}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;