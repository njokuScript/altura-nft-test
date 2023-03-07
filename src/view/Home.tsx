import React from 'react';
import Navbar from '../components/Navbar';
import HomeImg from '../assets/images/HomeCol.png';
import HomeImg2 from '../assets/images/HomeCol2.png';

function App() {
  return (
    <div className='bg-primary overflow-y-auto scrollbar-track-primary w-screen h-screen'>
      <Navbar />
      <div className='p-6'>
        <div className='font-mono font-bold text-white'>
          Discover, collect, and sell extraordinary NFTs
        </div>
      </div>
      <div className='flex justify-end'>
        <img src={HomeImg} alt='Image1' className='w-80' />
      </div>
      <div className='flex justify-start'>
        <img src={HomeImg2} alt='Image1' className=' -mt-24' />
      </div>
    </div>
  );
}

export default App;
