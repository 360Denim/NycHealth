import React from 'react';
import LoginBanner from '../../Assets/Banner image.png';
import LoginLogo from '../../Assets/Logo.svg';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className='login-main-outer'>
        <div className='login-left' style={{background: `url("${LoginBanner}")`}}>
            <h2>We Keep</h2>
            <h1>NYC Healthy</h1>
        </div>
        <div className='login-right'>
            <div className='login-logo-outer'>
                <img src={LoginLogo}/>
            </div>
            <div className='account-login-text'>
                <h5 className='font-login text-red-900'>Account Login</h5>
                <p>Enter your login details to continue</p>
            </div>
            <div className='account-lgoin-form'>
                <form id="accloginForm">
                    <div className="accForm-inner">
                        <label>User id</label>
                        <input type="text" placeholder="" name="uid"/>
                    </div>
                    <div className="accForm-inner">
                        <label>Password</label>
                        <input type="password" placeholder="" name="upass"/>
                    </div>
                    <label><input type="checkbox" />Remember me</label>
                    <Link to="/my-account"><input type="submit" value="Login"/></Link>
                </form>
                <div className='accform-contact'>
                    <p>Any issue, please contact</p>
                    <p id="accform-contact-mail">help@nychealthandhospitals.org</p>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Login