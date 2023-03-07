import React from 'react';
import Logo from '../../assets/images/logo.png';
import Search from '../Search';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap  p-6 '>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <img className='h-8 w-auto rounded-full' src={Logo} alt='Logo' />
      </div>
      <div className='hidden lg:block'>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
