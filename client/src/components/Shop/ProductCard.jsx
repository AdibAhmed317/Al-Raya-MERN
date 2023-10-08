import React from 'react';
import { Link } from 'react-router-dom';
import b2 from '../../assets/b2.jpg';
import { FaHeart } from 'react-icons/fa6';
import { BsCart3 } from 'react-icons/bs';

const ProductCard = ({ product }) => {
  return (
    <div className='flex flex-col shadow-lg bg-green-100 rounded-lg w-[10rem] md:w-[15rem]'>
      <Link to={`/product/${product._id}`}>
        <img
          className='object-cover rounded-t-lg'
          src={b2}
          alt='product image'
        />
      </Link>
      <div className='px-3'>
        <h5 className='text-base md:text-lg font-extralight text-green-900'>
          {product.title}
        </h5>
        <h5 className='text-sm md:text-lg font-medium text-green-900 mt-1'>
          <b className='text-base'>Size:</b> {product.size}
        </h5>
        <div className='flex flex-col md:flex-row justify-between md:items-center mb-5'>
          <h5 className='text-base md:text-2xl font-thin text-green-900'>
            ৳ {product.price}
          </h5>
          <div className='mt-1'>
            <button className='relative text-green-400 hover:text-red-700 mr-5'>
              <FaHeart />
            </button>
            <button className='relative text-green-800'>
              <BsCart3 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

{
  /* <div className='w-40 mt-2'>
<div className=''>


  <div className='flex flex-col justify-center md:justify-between mt-2 pb-1 md:pb-5 items-center md:flex-row'>
    <div>

    </div>
    <div className='mt-1 pl-10'>

    </div>
  </div>
</div>
</div> */
}
