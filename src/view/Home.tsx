import React from 'react';
import Navbar from '../components/Navbar';
import HomeImg from '../assets/images/HomeCol.png';
import HomeImg2 from '../assets/images/HomeCol2.png';
import Cards from '../components/Cards';
import DummyNft from '../assets/images/DummyNFT.png';
import Button from '../components/Button';
import NFT from './NFT';

function App() {
  return (
    <div className='bg-primary overflow-y-auto scrollbar-track-primary w-screen h-screen lg:px-24'>
      <Navbar />
      <div className='p-6'>
        <div className='font-mono font-bold text-white'>
          Discover, collect, and sell extraordinary NFTs
        </div>
      </div>

      <div className=''>
        <div className='flex justify-end'>
          <img src={HomeImg} alt='Image1' className='w-80' />
        </div>
        <div className='flex justify-start'>
          <img src={HomeImg2} alt='Image1' className='-mt-24' />
        </div>
        <Button
          className='lg:hidden -mt-32 flex justify-center'
          buttonText='View Collections'
        />
        <div className='hidden lg:block'>
          <NFT />
        </div>
      </div>
    </div>
  );
}

export default App;
