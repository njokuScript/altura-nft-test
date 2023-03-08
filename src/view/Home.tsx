import React from 'react';
import Navbar from '../components/Navbar';
import HomeImg from '../assets/images/HomeCol.png';
import HomeImg2 from '../assets/images/HomeCol2.png';
import DesktopImage3 from '../assets/images/ImageDesktop3.png';
import NFT from './NFT';

function App() {
  return (
    <div className='bg-primary overflow-y-auto scrollbar-track-primary w-screen h-screen overflow-hidden'>
      <Navbar />
      <div className='p-6 lg:py-6 lg:px-16'>
        <div className='font-mono text-2xl font-bold text-white'>
          Discover, collect, and sell extraordinary NFTs
        </div>
      </div>

      <div className='md:bg-primaryWhite md:w-auto md:h-auto md:mx-16 md:rounded-lg md:bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 md:flex justify-between'>
        <div className='md:flex'>
          <img
            src={DesktopImage3}
            alt='Image1'
            className='hidden md:block md:w-96'
          />
        </div>
        <div className='md:flex md:justify-end'>
          <img src={HomeImg} alt='Image1' className='hidden md:block' />
        </div>

        <div className='flex justify-end md:hidden'>
          <img src={HomeImg} alt='Image1' className='w-80 md:w-96' />
        </div>
        <div className='flex justify-start md:hidden'>
          <img src={HomeImg2} alt='Image1' className='-mt-24' />
        </div>
      </div>
      <NFT />
    </div>
  );
}

export default App;
