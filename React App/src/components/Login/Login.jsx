import React, { useState } from 'react';
import './Login.css';
import cross_icon from '../../assets/cross_icon.png';
import { useNavigate } from 'react-router-dom';
const Login = ({ setshowLogin, switchToSignUp, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
const navigate=useNavigate();
  const onlogin=()=>{
    setUser(email.startsWith('s') ? 'student' : email.startsWith('a') ? 'admin' : '');
     setshowLogin(false);
     navigate('/');
  }
  
  return (
    
    <div className='login-popup'>
      {!showForgotPassword && (
        <form className="login-popup-container" >
          <div className="login-popup-title">
            <h2>Login</h2>
            <img onClick={() => setshowLogin(false)} src={cross_icon} alt="Close" />
          </div>
          <div className="login-popup-inputs">
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Username" required />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
          <a href="#" onClick={() => setShowForgotPassword(true)} className="blue-link">Forgot Password?</a>
          </div>
          <button onClick={() => onlogin()} type="submit" disabled={loading}>{loading ? 'Logging In...' : 'Login'}</button>
          {loading && <p>Logging in, please wait...</p>}
          {/* <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing I agree to the terms of <span className="blue-link">use</span> and <span className="blue-link">privacy policy</span></p>
          </div> */}
        </form>
      )}

      {showForgotPassword && (
        <div className='forgot-password-popup'>
          <form className="forgot-password-container" onSubmit={handleForgotPassword}>
            <div className="forgot-password-title">
              <h2>Reset Password</h2>
              <img onClick={() => setShowForgotPassword(false)} src={cross_icon} alt="Close" />
            </div>
            <div className="forgot-password-inputs">
              <input onChange={(e) => setResetEmail(e.target.value)} type="email" placeholder="Enter your email" required />
            </div>
            <button type="submit" disabled={loading}>{loading ? 'Sending Email...' : 'Send Reset Email'}</button>
            {loading && <p>Sending reset email, please wait...</p>}
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;