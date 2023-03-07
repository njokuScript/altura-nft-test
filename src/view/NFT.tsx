import React from 'react';
import Cards from '../components/Cards';
import DummyNft from '../assets/images/DummyNFT.png';

const NFT = () => {
  return (
    <div className='flex row-auto'>
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
        amount='0.1 ETH'
      />
    </div>
  );
};

export default NFT;
