import React from 'react';
import Logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap  p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <img className='h-8 w-auto rounded-full' src={Logo} alt='Logo' />
      </div>
      <div className='block lg:hidden'>
        <button className='flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 132 124'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0 0V17.7905H132V0H0ZM0 52.8379V70.6284H132V52.8379H0ZM0 106.209V124H132V106.209H0Z'
              fill='white'
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
