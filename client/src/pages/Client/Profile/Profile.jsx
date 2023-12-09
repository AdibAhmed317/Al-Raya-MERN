import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { publicRequest } from '../../../network/RequestMethod';
import Footer from '../../../components/Footer/Footer';
import ProfileSidebar from '../../../components/Profile/ProfileSidebar';
import Dropdown from '../../../components/Navbar/DropDown';

const Profile = () => {
  const location = useLocation();
  const customerId = location.pathname.split('/')[2];
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetchCustomerDetails();
  }, []);

  const fetchCustomerDetails = () => {
    publicRequest
      .get(`user/find/${customerId}`)
      .then((response) => {
        setCustomer(response.data);
      })
      .catch((error) => {
        console.error('Error fetching customer details:', error);
      });
  };

  if (!customer) {
    return (
      <div className='h-screen flex items-center justify-center bg-green-50'>
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Dropdown />
      <ProfileSidebar />
      <hr />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: 'keyframes',
          delay: 0.175,
        }}
        className='bg-green-50 flex justify-center items-center min-h-[70vh]'>
        <div className='flex justify-center'>
          <div className='bg-green-200 shadow-md rounded p-6 max-w-2xl w-full text-green-900'>
            <h1 className='text-4xl font-thin text-center'>
              Account Information
            </h1>
            <div className='grid grid-cols-2 gap-y-4 text-xl mt-6'>
              <div className='text-left'>
                <p className='my-3 text-base'>
                  <strong>Customer ID:</strong>
                </p>
                <p className='my-3 text-base'>
                  <strong>Name:</strong>
                </p>
                <p className='my-3 text-base'>
                  <strong>Email:</strong>
                </p>
                <p className='my-3 text-base'>
                  <strong>Address:</strong>
                </p>
                <p className='my-3 text-base'>
                  <strong>Phone:</strong>
                </p>
              </div>
              <div className='text-left overflow-auto'>
                <p className='my-3 text-base'>{customer._id}</p>
                <p className='my-3 text-base'>{customer.Name}</p>
                <p className='my-3 text-base'>{customer.Email}</p>
                <p className='my-3 text-base'>{customer.Address}</p>
                <p className='my-3 text-base'>{customer.Phone}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Profile;
