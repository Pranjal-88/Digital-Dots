// src/components/DonationPage.js
import React, { useState } from 'react';
import './DonationPage.css';

const DonationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    nationality: 'indian',
    amount: '1000',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display alert message
    alert('Thanks for your contribution!');
    // Handle form submission logic here
    console.log(formData);
    // Clear form data
    setFormData({
      name: '',
      email: '',
      mobile: '',
      address: '',
      nationality: 'indian',
      amount: '1000',
    });
    // Set submitted state to true
    setSubmitted(true);
  };

  const handleAmountClick = (amount) => {
    setFormData((prevData) => ({
      ...prevData,
      amount,
    }));
  };

  return (
    <div className="donation-page">
      {submitted ? (
        <h2>Thank you for your contribution!</h2>
      ) : (
        <>
          <h2>Choose a donation amount</h2>
          <div className="donation-amounts">
            <button className={formData.amount === '300' ? 'selected' : ''} onClick={() => handleAmountClick('300')}>
              <p className='amount'>₹ 300</p>
            </button>
            <button className={formData.amount === '1000' ? 'selected' : ''} onClick={() => handleAmountClick('1000')}>
              <p className='amount'>₹ 1000</p>
            </button>
            <button className={formData.amount === '2000' ? 'selected' : ''} onClick={() => handleAmountClick('2000')}>
              <p className='amount'>₹ 2000</p>
            </button>
            <button className={formData.amount === 'other' ? 'selected' : ''} onClick={() => handleAmountClick('other')}>
              <p className='amount'>Other Amount</p>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            {formData.amount === 'other' && (
              <input
                type="number"
                name="amount"
                placeholder="Enter Amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            )}
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              <input type="checkbox" name="anonymous" onChange={handleChange} /> Make my donation anonymous
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Your Mobile Number:
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </label>
            <label>
              Address:
              <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </label>
            <div className="nationality">
              <label>
                <input type="radio" name="nationality" value="indian" checked={formData.nationality === 'indian'} onChange={handleChange} />
                I'm an Indian National
              </label>
              <label>
                <input type="radio" name="nationality" value="non-indian" checked={formData.nationality === 'non-indian'} onChange={handleChange} />
                I'm not an Indian National
              </label>
            </div>
            <button type="submit">Proceed To Pay ₹ {formData.amount}</button>
          </form>
          <p>By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></p>
        </>
      )}
    </div>
  );
};

export default DonationPage;
