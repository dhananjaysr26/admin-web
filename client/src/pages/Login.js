import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { IoMdEyeOff } from "react-icons/io";
import { MdEmail, MdLock, MdRemoveRedEye } from "react-icons/md";
import logo from '../images/logo.jpeg'

function Login() {
    const [showPassword, setShowPassword] = useState(false);


    const handleCallBackResponse = (res) => {
        console.log(res)
        var userObject = jwt_decode(res.credential)
        console.log(userObject)
    }
    // Google Login
    useEffect(() => {
        /*global google */
        google.accounts.id.initialize({
            client_id: "111509674703-llnujfekckvhcaamhusl28jpkr2b8tgn.apps.googleusercontent.com",
            callback: handleCallBackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('google-signin'),
            { theme: 'outline', size: 'large' }
        );
    }, []);
    return (
        <div className='container'>
            <div className='login-card'>
                <img src={logo} alt='logo' />
                <div className='input-container'>
                    <MdEmail className='icon' />
                    <input type='text' placeholder='Email Address' />
                </div>
                <div className='input-container'>
                    <MdLock className='icon' />
                    <input type={showPassword ? "text" : "password"} placeholder='Password' />
                    {
                        showPassword ?
                            <MdRemoveRedEye className='icon2' onClick={() => setShowPassword(preValue => !preValue)} /> :
                            <IoMdEyeOff className='icon2' onClick={() => setShowPassword(preValue => !preValue)} />
                    }
                </div>
                <div className='forgot'>FORGOT PASSWORD?</div>
                <button className='btn'>SIGN IN</button>
                <button className='btn'>CREATE AN ACCOUNT</button>
                <p className='or'><span>OR</span></p>
                <div className='google-login'>
                    <div id='google-signin'></div>
                </div>
                <div className='app-version'>
                    <p>v1.0</p>
                </div>
            </div>

        </div>
    )
}

export default Login