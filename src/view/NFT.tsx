/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Cards from '../components/Cards';
import Bscscan from '../assets/images/bscscan.png';
import Metadata from '../assets/images/metadata.png';
import Modal from '../components/Modal';
import { formatAmount, truncateAddress } from '../libs/utils';
import Button from '../components/Button';
import { useNFT } from '../hooks/useNFT';
import { Link } from 'react-router-dom';
import { INFT } from '../store/types';

const NFT = () => {
  const { collection, nfts, loading, getNfts, getCollection } = useNFT();

  const [cursor, setCursor] = React.useState<string | undefined>('');

  const containerRef = React.useRef<HTMLDivElement>(null);

  const [selectedItems, setSelectedItems] = React.useState<INFT>({
    id: 0,
    name: '',
    description: '',
    owner: '',
    imageUrl: '',
    metadata: '',
    price: '',
  });

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = (nftData: any) => {
    const newNftData = {
      id: nftData?.id,
      name: nftData?.token_name,
      description: nftData?.token_description,
      owner: nftData?.current_owners[0]?.address,
      imageUrl: nftData?.metadata.image,
      metadata: nftData?.uri,
      price: nftData?.recent_price?.price_usd,
    };
    setSelectedItems(newNftData);
    setIsOpen(!modalIsOpen);
  };
  function closeModal() {
    setIsOpen(!modalIsOpen);
  }
  React.useEffect(() => {
    getCollection('0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B');
    getNfts('0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B');
    if (nfts) {
      setCursor(nfts?.cursor);
    }
  }, [cursor]);

  function handleScroll() {
    const container = containerRef.current;
    if (
      container &&
      container.scrollHeight - container.scrollTop === container.clientHeight
    ) {
      setCursor(cursor);
    }
  }

  React.useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className=' bg-primary overflow-y-auto scrollbar-track-primary w-screen h-screen'>
      <div className='p-8 lg:py-6 lg:px-16'>
        <div className='font-mono font-bold text-white pt-10 text-xl'>
          Featured Collections - {collection?.collectionName}
        </div>
      </div>
      <div className='grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 h-auto p-8 lg:py-6 lg:px-16'>
        <>
          {nfts?.data?.map((nft: any) => {
            return loading.NFTs ? (
              <div className='relative my-4 bg-primaryWhite rounded-lg h-96 w-auto overflow-hidden shadow animate-pulse'>
                <div className='w-full h-60 bg-primaryWhite inset-0' />
                <div className='px-4'>
                  <div className='h-2.5 rounded-full bg-gray-600 w-24 mb-2.5 mt-10'></div>
                  <div className='flex justify-between items-center pt-6'>
                    <div className='flex items-center justify-center'>
                      <div className='h-8 w-8 rounded-full bg-gray-700' />
                      <div className='h-2.5 rounded-full bg-gray-700 w-24 ml-2'></div>
                    </div>
                    <div className='h-2.5  rounded-full bg-gray-700 w-12'></div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Cards
                  onclick={() => openModal(nft)}
                  collectionImage={collection?.collectionImage}
                  image={nft?.metadata?.image}
                  collectionName={collection?.collectionName}
                  nftName={nft?.token_name}
                  amount={`${formatAmount(nft?.recent_price?.price_usd)} USD`}
                />
              </>
            );
          })}
        </>
      </div>
      <Modal onClose={closeModal} isOpen={modalIsOpen}>
        <div className='lg:my-8'>
          <div className='md:flex'>
            <img
              src={selectedItems.imageUrl}
              alt='Image1'
              className='w-full object-cover md:object-contain h-56 md:h-2/3 md:w-96 md:rounded-xl md:mt-16 md:ml-10'
            />
            <div className='flex justify-between items-center md:block md:mt-32 md:pl-12'>
              <div className='font-mono font-bold text-white mt-2 pl-5 pt-2 md:text-2xl'>
                {selectedItems?.name}
              </div>
              <div className='font-mono text-xs font-semibold text-orange-200 mt-2 pt-2 pr-5 md:text-xl md:pl-5'>
                {`${formatAmount(selectedItems?.price)} USD`}
              </div>

              <div className='hidden md:block'>
                <Button
                  route={`https://opensea.io/assets/ethereum/${collection?.collectionAddress}/${selectedItems?.id}`}
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
                    {truncateAddress(selectedItems?.owner)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='p-5 '>
            <div className='flex mt-6 md:p-5 items-center'>
              <img
                className='h-8 w-auto rounded-full'
                src={collection?.collectionImage}
                alt='Logo'
              />
              <div className='pl-4 md:pl-4'>
                <div className='font-mono text-xs text-white'>
                  {collection?.collectionName}
                </div>
                <div className=' font-mono text-xs text-gray-500 pt-2'>
                  {truncateAddress(collection?.collectionAddress)}
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
                  {selectedItems?.description}
                </div>
              </div>
              <div>
                <div className='font-mono font-semibold text-sm md:text-md text-white mt-4'>
                  Details
                </div>
                <div className='border mt-2 border-primaryWhite'></div>

                <div>
                  <Link
                    className='flex mt-4 items-center'
                    target={'_blank'}
                    to={`https://etherscan.io/nft/${collection?.collectionAddress}/${selectedItems?.id}`}>
                    <img src={Bscscan} alt='Bsc scan logo' />
                    <div className='font-mono text-xs md:text-md text-gray-500 pl-2'>
                      View on Etherscan
                    </div>
                  </Link>
                </div>

                <div className='flex mt-4 items-center'>
                  <img src={Metadata} alt='Bsc scan logo' />
                  <div className='font-mono text-xs md:text-md text-gray-500 pl-2'>
                    View Metadata
                  </div>
                </div>
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
                {truncateAddress(selectedItems?.owner)}
              </div>
            </div>
          </div>
          <div className='md:hidden mx-6'>
            <Button
              route={`https://opensea.io/assets/ethereum/${collection?.collectionAddress}/${selectedItems?.id}`}
              className='justify-center flex mt-8 mb-5 md:mb-5'
              buttonText='Purchase NFT'
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NFT;
