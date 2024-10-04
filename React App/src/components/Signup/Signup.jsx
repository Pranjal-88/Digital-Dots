import React, { useState } from 'react';
import './Signup.css';
import cross_icon from '../../assets/cross_icon.png';




const SignUp = ({ setshowLogin, switchToLogin }) => {
  const [loading, setLoading] = useState(false);
  async function handleClose() {
    // if (createdUser && !createdUser.emailVerified) {
    //   try {
    //     await deleteUser(createdUser);
    //     toast.warn('User account deleted due to unverified email.');
    //   } catch (error) {
    //     console.error('Error deleting user:', error);
    //     toast.error('Error deleting user. Please try again.');
    //   }
    // }
    setshowLogin(false);
  }
  
  return (
    <div className='login-popup'>
      <form className="login-popup-container" >
        <div className="login-popup-title">
          <h2>Sign Up</h2>
          <img onClick={handleClose} src={cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name" required />
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
          <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm password" required />
          <input onChange={(e) => setphNo(e.target.value)} type="number" placeholder="Your Phone number" required />
        </div>
        <button type="submit" >
        Create Account
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing I agree to the terms of use and privacy policy</p>
        </div>
        <p>Already have an account? <span onClick={switchToLogin}>Login here</span></p>
      </form>
    </div>
  );
}

export default SignUp;