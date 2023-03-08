import React from 'react';
import Cards from '../components/Cards';
import DummyNft from '../assets/images/DummyNFT.png';
import DummyNft2 from '../assets/images/DummyNft2.png';
import Logo from '../assets/images/logo.png';
import Bscscan from '../assets/images/bscscan.png';
import Metadata from '../assets/images/metadata.png';
import Modal from '../components/Modal';
import { truncateAddress } from '../libs/utils';
import Button from '../components/Button';
import { useNFT } from '../hooks/useNFT';

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
  const { collection, error, nfts, loading, getNfts, getCollection } = useNFT();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }
  React.useEffect(() => {
    getCollection('0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D');
  }, []);
  console.log(collection, error);
  return (
    <div className=' bg-primary overflow-y-auto scrollbar-track-primary w-screen h-screen'>
      <div className='p-8 lg:py-6 lg:px-16'>
        <div className='font-mono font-bold text-white pt-10 text-xl'>
          Featured Collections - The Return of Sumarai
        </div>
      </div>
      <div className='grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 h-auto p-8 lg:py-6 lg:px-16'>
        <Cards
          onclick={toggleModal}
          collectionImage={Logo}
          image={DummyNft2}
          collectionName='The Hatchable'
          nftName='Altura Fox - Legendary'
          amount='0.1 BNB'
        />
        <Cards
          image={DummyNft}
          collectionName='The Hatchable'
          collectionImage={Logo}
          nftName='Altura Fox - Legendary'
          amount='0.1 BNB'
        />
        <Cards
          image={DummyNft}
          collectionName='The Hatchable'
          collectionImage={Logo}
          nftName='Altura Fox - Legendary'
          amount='0.1 ETH'
        />
        <Cards
          image={DummyNft}
          collectionImage={Logo}
          collectionName=' The Hatchable'
          nftName='Altura Fox - Legendary'
          amount='0.1 BNB'
        />
      </div>
      <Modal onClose={toggleModal} isOpen={modalIsOpen}>
        <div className='lg:my-8'>
          <div className='md:flex'>
            <img
              src={DummyNft}
              alt='Image1'
              className='w-full object-cover md:object-contain h-56 md:h-2/3 md:w-96 md:rounded-xl md:mt-16 md:ml-10'
            />
            <div className='flex justify-between items-center md:block md:mt-32 md:pl-12'>
              <div className='font-mono font-bold text-white mt-2 pl-5 pt-2 md:text-2xl'>
                Altura Fox - Legendary
              </div>
              <div className='font-mono text-xs font-semibold text-orange-200 mt-2 pt-2 pr-5 md:text-xl md:pl-5'>
                100 BUSD
              </div>

              <div className='hidden md:block'>
                <Button
                  route='/'
                  className='justify-center flex mt-8 md:mb-5'
                  buttonText='Purchase NFT'
                />
              </div>
              <div className='hidden md:flex items-center md:mt-12'>
                <div className='font-mono font-semibold text-sm text-white p-5'>
                  Owner
                </div>
                <div className='flex items-center rounded-xl p-2 bg-primary shadow-2xl shadow-primaryWhite'>
                  <div className='bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full h-8 w-8'></div>
                  <div className='pl-3 text-orange-200 font-mono text-xs'>
                    {truncateAddress(
                      '0x1234567890123456789012345678901234567890'
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='p-5 '>
            <div className='flex mt-6 md:p-5 items-center'>
              <img className='h-8 w-auto rounded-full' src={Logo} alt='Logo' />
              <div className='pl-4 md:pl-4'>
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
            <div className='md:flex md:mt-2 mt-12'>
              <div className='md:w-96 md:mr-32'>
                <div className='font-mono font-semibold text-sm md:text-md text-white mt-4'>
                  Description
                </div>
                <div className='border mt-2 border-primaryWhite'></div>

                <div className='font-mono font-semibold text-sm md:text-md text-gray-500 mt-4'>
                  The Hatchables Collection are the NFTs that drop from Altura's
                  first-ever loot box.The Hatchables are Smart NFT Eggs that
                  crack over time until hatching into their final unknown form
                </div>
              </div>
              <div>
                <div className='font-mono font-semibold text-sm md:text-md text-white mt-4'>
                  Details
                </div>
                <div className='border mt-2 border-primaryWhite'></div>
                {detailsData.map(item => {
                  return (
                    <div className='flex mt-4 items-center'>
                      <img src={item.image} alt='Bsc scan logo' />
                      <div className='font-mono text-xs md:text-md text-gray-500 pl-2'>
                        {item.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='flex items-center md:hidden'>
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
          <div className='md:hidden mt-12 '>
            <Button
              route='/'
              className='justify-center flex md:mb-5'
              buttonText='Purchase NFT'
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NFT;
