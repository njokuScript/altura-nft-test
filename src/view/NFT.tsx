import React from 'react';
import Cards from '../components/Cards';
import DummyNft from '../assets/images/DummyNFT.png';
import Logo from '../assets/images/logo.png';
import Bscscan from '../assets/images/bscscan.png';
import Metadata from '../assets/images/metadata.png';
import Modal from '../components/Modal';
import { truncateAddress } from '../libs/utils';
import Button from '../components/Button';

const detailsData = [
  {
    id: 1,
    desc: 'View on Bscscan',
    image: Bscscan,
  },
  {
    id: 2,
    desc: 'View metadata',
    image: Metadata,
  },
];

const NFT = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
    <div className=' bg-primary overflow-y-auto scrollbar-track-primary w-screen h-screen'>
      <div className=' p-6'>
        <div className='font-mono font-bold text-white'>
          More from the Hatchable Collection - Sumarai
        </div>
      </div>
      <div className='grid grid-cols-2 gap-1 sm:grid-cols-2 lg:grid-cols-3 h-auto'>
        <Cards
          onclick={toggleModal}
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
      <Modal onClose={toggleModal} isOpen={modalIsOpen}>
        <div className=''>
          <img
            src={DummyNft}
            alt='Image1'
            className='w-full object-cover h-56'
          />
          <div className='flex justify-between items-center'>
            <div className='font-mono font-bold text-white mt-2 pl-5 pt-2'>
              Altura Fox - Legendary
            </div>
            <div className='font-mono text-xs font-semibold text-orange-200 mt-2 pt-2 pr-5'>
              100 BUSD
            </div>
          </div>
          <div className='p-5'>
            <div className='flex mt-6 items-center'>
              <img className='h-8 w-auto rounded-full' src={Logo} alt='Logo' />
              <div className='pl-4'>
                <div className='font-mono text-xs text-white'>
                  The Hatchable
                </div>
                <div className=' font-mono text-xs text-gray-500 pt-2'>
                  {truncateAddress(
                    '0x1234567890123456789012345678901234567890'
                  )}
                </div>
              </div>
            </div>
            <div className='font-mono font-semibold text-sm text-white mt-4'>
              Description
            </div>
            <div className='border mt-2 border-primaryWhite'></div>
            <div className='font-mono font-semibold text-xs text-gray-500 mt-4'>
              The Hatchables Collection are the NFTs that drop from Altura's
              first-ever loot box.The Hatchables are Smart NFT Eggs that crack
              over time until hatching into their final unknown form
            </div>
            <div className='font-mono font-semibold text-sm text-white mt-10'>
              Details
            </div>
            <div className='border mt-2 border-primaryWhite'></div>
            {detailsData.map(item => {
              return (
                <div className='flex mt-4 items-center'>
                  <img src={item.image} alt='Bsc scan logo' />
                  <div className='font-mono text-xs text-gray-500 pl-2'>
                    {item.desc}
                  </div>
                </div>
              );
            })}
          </div>
          <div className='flex items-center '>
            <div className='font-mono font-semibold text-sm text-white p-5'>
              Owner
            </div>
            <div className='flex items-center rounded-xl p-2 bg-primary shadow-2xl shadow-primaryWhite'>
              <div className='bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full h-8 w-8'></div>
              <div className='pl-3 text-orange-200 font-mono text-xs'>
                {truncateAddress('0x1234567890123456789012345678901234567890')}
              </div>
            </div>
          </div>
          <div>
            <Button
              route='/'
              className='justify-center flex mt-8'
              buttonText='Purchase NFT'
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NFT;
