import React from 'react';
import Cards from '../components/Cards';
import DummyNft from '../assets/images/DummyNFT.png';
import Search from '../components/Search';

const NFT = () => {
  return (
    <div className=' bg-primary overflow-y-auto scrollbar-track-primary w-screen h-screen'>
      <div className=' p-6'>
        <div className='font-mono font-bold text-white'>
          More from the Hatchable Collection - Sumarai
        </div>
      </div>
      <div className='grid grid-cols-2 gap-1 sm:grid-cols-2 lg:grid-cols-3 h-auto'>
        <Cards
          image={DummyNft}
          collectionName='Njoku'
          rarity='Super Rare'
          nftName='Eluuu p'
          amount='0.1 BNB'
        />
        <Cards
          image={DummyNft}
          collectionName='Njoku'
          rarity='Super Rare'
          nftName='Eluuu p'
          amount='0.1 BNB'
        />
        <Cards
          image={DummyNft}
          collectionName='Njoku'
          rarity='Super Rare'
          nftName='Eluuu p'
          amount='0.1 ETH'
        />
        <Cards
          image={DummyNft}
          collectionName='Njoku'
          rarity='Super Rare'
          nftName='Eluuu p'
          amount='0.1 BNB'
        />
      </div>
    </div>
  );
};

export default NFT;
