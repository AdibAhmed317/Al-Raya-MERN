import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Dropdown from '../../components/Navbar/DropDown';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer/Footer';
import ab1 from '../../assets/about/ab1.jpg';
import ab2 from '../../assets/about/ab2.jpg';
import ab3 from '../../assets/about/ab3.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <Dropdown />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: 'keyframes',
          delay: 0.175,
        }}
        className='flex flex-col justify-center items-center bg-green-50'>
        <div>
          <h1 className='text-5xl md:text-6xl font-thin text-center text-green-800 my-16'>
            Our Story
          </h1>
          <p className='mx-10 md:mx-40 text-2xl text-justify text-green-800 my-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            repellat officia at dolore neque consectetur fugit nobis pariatur
            veniam. Magnam, cumque reiciendis odio eveniet suscipit aperiam
            debitis ipsam beatae iste. Amet unde assumenda sequi, fugiat hic
            esse debitis nisi in aliquid ratione quam quisquam optio ullam
            veniam doloremque magnam repellat facere saepe fuga fugit facilis
            itaque incidunt obcaecati cupiditate! Dolorum rem dicta quasi illum
            omnis perspiciatis delectus, sint, tenetur alias rerum eaque saepe
            cupiditate, minima itaque eius labore voluptas sit? Deleniti,
            numquam nobis possimus cumque officiis doloribus alias? Ipsum sunt
            commodi eos dignissimos facilis aliquid odio nihil beatae quaerat
            animi!
          </p>
        </div>
        <div className='mb-20 flex flex-col md:flex-row overflow-auto'>
          <img
            src={ab1}
            height={500}
            width={500}
            className='mx-5 object-cover'
          />
          <img
            src={ab2}
            height={500}
            width={500}
            className='mx-5 object-cover'
          />
          <img
            src={ab3}
            height={500}
            width={500}
            className='mx-5 object-cover'
          />
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default About;
