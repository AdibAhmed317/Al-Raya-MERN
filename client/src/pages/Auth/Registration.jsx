import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match.');
      return;
    }
    try {
      const registrationData = {
        Name: name,
        Email: email,
        Password: password,
        Phone: phoneNumber,
        Address: address,
      };
      const response = await axios.post(
        'http://localhost:5000/api/user/registration',
        registrationData
      );

      // Handle successful registration response, if needed
      console.log('Registration successful:', response.data);
    } catch (error) {
      // Handle registration error, if needed
      console.error('Registration error:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='w-auto h-screen bg-green-50 flex items-center justify-center'>
        <div className='p-5 w-[350px] md:w-[40%] bg-green-200'>
          <h1 className='text-2xl font-light'>CREATE AN ACCOUNT</h1>
          <input
            className='flex-1 min-w-[40%] mt-5 mr-3 mb-0 ml-0 bg-green-50 p-3'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='flex-1 min-w-[40%] mt-5 mr-3 mb-0 ml-0 bg-green-50 p-3'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='flex-1 min-w-[40%] mt-5 mr-3 mb-0 ml-0 bg-green-50 p-3'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className='flex-1 min-w-[40%] mt-5 mr-3 mb-0 ml-0 bg-green-50 p-3'
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            className='flex-1 min-w-[40%] mt-5 mr-3 mb-0 ml-0 bg-green-50 p-3'
            placeholder='Phone Number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            className='flex-1 min-w-[40%] mt-5 mr-3 mb-0 ml-0 bg-green-50 p-3'
            placeholder='Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <button
            className='w-full border-none py-2 px-5 text-center bg-green-900 text-white cursor-pointer mt-10'
            onClick={handleSubmit}>
            Create
          </button>
          <span className='text-sm my-5 mx-0'>
            <Link
              className='my-2 mx-0 text-base underline cursor-pointer text-green-900'
              to='/login'>
              Already have an account?
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Registration;